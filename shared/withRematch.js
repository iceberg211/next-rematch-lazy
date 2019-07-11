/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Provider, connect } from 'react-redux';
import initializeStore from './store';

const checkServer = () => Object.prototype.toString.call(global.process) === '[object process]';

const __NEXT_REMATCH_STORE__ = '__NEXT_REMATCH_STORE__';

const getOrCreateStore = (lazyModel, initialState) => {
  const isServer = checkServer();
  if (isServer) {
    return initializeStore(initialState, lazyModel);
  }

  // Memoize store in global variable if client
  if (!window[__NEXT_REMATCH_STORE__]) {
    window[__NEXT_REMATCH_STORE__] = initializeStore(initialState, lazyModel);
  }
  return window[__NEXT_REMATCH_STORE__];
};


export default (...args) => Component => {
  const [mapToPops, mapDisToProps, ...lazyModel] = args;
  const ConnectedComponent = connect(mapToPops, mapDisToProps)(Component);

  return class ComWithRematch extends React.Component {
    static async getInitialProps(appContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const store = getOrCreateStore(lazyModel);
      const isServer = checkServer();
      if (!isServer && Array.isArray(lazyModel)) {
        const reduxState = store.getState();
        lazyModel.forEach(item => {
          const { name } = item;
          if (reduxState[name] === undefined) store.model(item);
        });
      }

      appContext.store = store;
      appContext.isServer = isServer;

      let appProps = {};
      if (typeof Component.getInitialProps === 'function') {
        appProps = await Component.getInitialProps(appContext);
      }
      return {
        ...appProps,
        initialReduxState: store.getState()
      };
    }

    constructor(props) {
      super(props);
      this.store = getOrCreateStore(lazyModel, props.initialReduxState);
    }

    render() {
      const { pageProps } = this.props;

      return (
        <Provider store={this.store}>
          <ConnectedComponent {...pageProps} />
        </Provider>
      );
    }
  };
};
