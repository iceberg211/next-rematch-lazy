import { init } from '@rematch/core'
import { counter } from './models'

const initializeStore = (initialState = {}, lazyModel) =>
  init({
    models: {
      counter,
      ...lazyModel,
    },
    redux: {
      initialState,
    },
  });


export default initializeStore;
