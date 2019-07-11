webpackHotUpdate("static\\development\\pages\\github-users.js",{

/***/ "./shared/withRematch.js":
/*!*******************************!*\
  !*** ./shared/withRematch.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./store */ "./shared/store.js");










var _jsxFileName = "F:\\next\\with-rematch-app\\shared\\withRematch.js";

/* eslint-disable no-underscore-dangle */




var checkServer = function checkServer() {
  return Object.prototype.toString.call(global.process) === '[object process]';
};

var __NEXT_REMATCH_STORE__ = '__NEXT_REMATCH_STORE__';

var getOrCreateStore = function getOrCreateStore(lazyModel, initialState) {
  var isServer = checkServer();

  if (isServer) {
    return Object(_store__WEBPACK_IMPORTED_MODULE_12__["default"])(initialState, lazyModel);
  } // Memoize store in global variable if client


  if (!window[__NEXT_REMATCH_STORE__]) {
    window[__NEXT_REMATCH_STORE__] = Object(_store__WEBPACK_IMPORTED_MODULE_12__["default"])(initialState, lazyModel);
  }

  return window[__NEXT_REMATCH_STORE__];
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return function (Component) {
    var mapToPops = args[0],
        mapDisToProps = args[1],
        lazyModel = args.slice(2);
    var ConnectedComponent = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapToPops, mapDisToProps)(Component);
    return (
      /*#__PURE__*/
      function (_React$Component) {
        Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(ComWithRematch, _React$Component);

        Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__["default"])(ComWithRematch, null, [{
          key: "getInitialProps",
          value: function () {
            var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
            /*#__PURE__*/
            _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(appContext) {
              var store, isServer, reduxState, appProps;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      // Get or Create the store with `undefined` as initialState
                      // This allows you to set a custom default initialState
                      store = getOrCreateStore(lazyModel);
                      isServer = checkServer();

                      if (!isServer && _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_3___default()(lazyModel)) {
                        reduxState = store.getState();
                        lazyModel.forEach(function (item) {
                          var name = item.name;
                          if (reduxState[name] === undefined) store.model(item);
                        });
                      }

                      appContext.store = store;
                      appContext.isServer = isServer;
                      appProps = {};

                      if (!(typeof Component.getInitialProps === 'function')) {
                        _context.next = 10;
                        break;
                      }

                      _context.next = 9;
                      return Component.getInitialProps(appContext);

                    case 9:
                      appProps = _context.sent;

                    case 10:
                      return _context.abrupt("return", Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, appProps, {
                        initialReduxState: store.getState()
                      }));

                    case 11:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            function getInitialProps(_x) {
              return _getInitialProps.apply(this, arguments);
            }

            return getInitialProps;
          }()
        }]);

        function ComWithRematch(props) {
          var _this;

          Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, ComWithRematch);

          _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(ComWithRematch).call(this, props));
          _this.store = getOrCreateStore(lazyModel, props.initialReduxState);
          return _this;
        }

        Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__["default"])(ComWithRematch, [{
          key: "render",
          value: function render() {
            var pageProps = this.props.pageProps;
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_11__["Provider"], {
              store: this.store,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 64
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(ConnectedComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 65
              },
              __self: this
            })));
          }
        }]);

        return ComWithRematch;
      }(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component)
    );
  };
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=github-users.js.72c27a94f455ef82a43e.hot-update.js.map