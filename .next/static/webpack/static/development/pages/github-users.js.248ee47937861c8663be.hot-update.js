webpackHotUpdate("static\\development\\pages\\github-users.js",{

/***/ "./pages/github-users.js":
/*!*******************************!*\
  !*** ./pages/github-users.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_withRematch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/withRematch */ "./shared/withRematch.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/utils */ "./shared/utils.js");
/* harmony import */ var _shared_components_counter_display__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/components/counter-display */ "./shared/components/counter-display.js");
/* harmony import */ var _shared_components_header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/components/header */ "./shared/components/header.js");
/* harmony import */ var _shared_models_github__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/models/github */ "./shared/models/github.js");







var _jsxFileName = "F:\\next\\with-rematch-app\\pages\\github-users.js";








var Github =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Github, _Component);

  function Github() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Github);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Github).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Github, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isLoading = _this$props.isLoading,
          fetchUsers = _this$props.fetchUsers,
          userList = _this$props.userList;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_shared_components_header__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, " Github users "), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "Server rendered github user list. You can also reload the users from the api by clicking the ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Get users"), " button below."), isLoading ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Loading ...") : null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: fetchUsers,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Get users")), userList.map(function (user) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          key: user.login,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: user.html_url,
          passHref: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
          height: "45",
          width: "45",
          src: user.avatar_url,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, " Username - ", user.login))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }));
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_shared_components_counter_display__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var isServer, store;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                isServer = _ref.isServer, store = _ref.store;

                if (!isServer) {
                  _context.next = 4;
                  break;
                }

                _context.next = 4;
                return store.dispatch.github.fetchUsers();

              case 4:
                return _context.abrupt("return", {});

              case 5:
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

  return Github;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapState = function mapState(state) {
  return {
    userList: state.github.users,
    isLoading: state.github.isLoading
  };
};

var mapDispatch = function mapDispatch(_ref2) {
  var _fetchUsers = _ref2.github.fetchUsers;
  return {
    fetchUsers: function fetchUsers() {
      return _fetchUsers();
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_shared_withRematch__WEBPACK_IMPORTED_MODULE_9__["default"])(mapState, mapDispatch, _shared_models_github__WEBPACK_IMPORTED_MODULE_13__["default"])(Github));

/***/ })

})
//# sourceMappingURL=github-users.js.248ee47937861c8663be.hot-update.js.map