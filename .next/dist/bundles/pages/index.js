module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./common/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = setTranslations;
/* harmony export (immutable) */ __webpack_exports__["a"] = getTranslations;
/* harmony export (immutable) */ __webpack_exports__["c"] = toggleMenu;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types__ = __webpack_require__("./common/types.js");


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




/**
 * Gets global language for application
 *
 * @param {Object} str - Language key
 */
function setTranslations() {
  var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'is';
  var translations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  return function (dispatch) {
    var payload = {
      lang: lang,
      translations: translations || null
    };

    dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__types__["a" /* SET_LANG */], payload: payload });
  };
}

/**
 * Gets global language for application
 *
 * @param {String} lang - Language key
 */
function getTranslations() {
  var _this = this;

  var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'is';

  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(dispatch) {
      var response, payload;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/static/lang/' + lang + '.json');

            case 3:
              response = _context.sent;
              payload = {
                lang: lang,
                translations: response.data
              };


              dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__types__["a" /* SET_LANG */], payload: payload });
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context['catch'](0);
              return _context.abrupt('return', new Error(_context.t0));

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 8]]);
    }));

    return function (_x4) {
      return _ref.apply(this, arguments);
    };
  }();
}

/**
 * Toggles navigation menu
 *
 * @param {Boolean} menuOpen - State of navigatin menu
 */
function toggleMenu(menuOpen) {
  return { type: __WEBPACK_IMPORTED_MODULE_2__types__["b" /* TOGGLE_MENU */], payload: menuOpen };
}

/***/ }),

/***/ "./common/reducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types__ = __webpack_require__("./common/types.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



var initialState = {
  avaliableLang: ['is', 'en'],
  lang: 'is',
  translations: null,
  menuOpen: false
};

/* harmony default export */ __webpack_exports__["a"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__types__["a" /* SET_LANG */]:
      return _extends({}, state, {
        lang: action.payload.lang,
        translations: action.payload.translations
      });

    case __WEBPACK_IMPORTED_MODULE_0__types__["b" /* TOGGLE_MENU */]:
      return _extends({}, state, {
        menuOpen: action.payload
      });

    default:
      return _extends({}, state);
  }
});

/***/ }),

/***/ "./common/rootReducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducer__ = __webpack_require__("./common/reducer.js");



var rootReducer = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  common: __WEBPACK_IMPORTED_MODULE_1__reducer__["a" /* default */]
});

/* harmony default export */ __webpack_exports__["a"] = (rootReducer);

/***/ }),

/***/ "./common/store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__("redux-thunk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rootReducer__ = __webpack_require__("./common/rootReducer.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };





function configureStore(initialState) {
  var store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_2__rootReducer__["a" /* default */], initialState, Object(__WEBPACK_IMPORTED_MODULE_0_redux__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a), (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : function (f) {
    return f;
  }));

  return store;
}

/***/ }),

/***/ "./common/types.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_LANG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TOGGLE_MENU; });
// Common
var SET_LANG = 'set_lang';
var TOGGLE_MENU = 'toggle_menu';

/***/ }),

/***/ "./components/button/button.css":
/***/ (function(module, exports) {

module.exports = {
	"button": "_7lCAZ3L8bd8-DLnlo_N6u"
};

/***/ }),

/***/ "./components/button/button.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button_css__ = __webpack_require__("./components/button/button.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__button_css__);
var _jsxFileName = '/Users/snaerthoroddsson/Projects/straumverk_new/components/button/button.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'button',
        { className: __WEBPACK_IMPORTED_MODULE_2__button_css___default.a.button, __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        children
      );
    }
  }]);

  return Button;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Button.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),

/***/ "./components/button/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button__ = __webpack_require__("./components/button/button.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__button__["a"]; });


/***/ }),

/***/ "./components/footer/footer.css":
/***/ (function(module, exports) {

module.exports = {
	"container": "_1uYiT3lVTswiNlYVkzx3mm"
};

/***/ }),

/***/ "./components/footer/footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer_css__ = __webpack_require__("./components/footer/footer.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__footer_css__);
var _jsxFileName = '/Users/snaerthoroddsson/Projects/straumverk_new/components/footer/footer.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      var t = this.props.t;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'footer',
        { className: __WEBPACK_IMPORTED_MODULE_2__footer_css___default.a.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container', __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'content has-text-centered', __source: {
                fileName: _jsxFileName,
                lineNumber: 12
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 13
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'strong',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                  }
                },
                'Straumverk ehf.'
              ),
              ' \xB7 Netfang:',
              ' ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: 'mailto:straumverk@straumverk.is', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                  }
                },
                'straumverk@straumverk.is'
              ),
              ' \xB7 Kt.640517-0500 \xB7 Vsk.129428 \xB7 S\xEDmi: ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: 'tel:+3548884070', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                  }
                },
                '888-4070'
              )
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Footer.propTypes = {
  t: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./components/footer/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__footer__ = __webpack_require__("./components/footer/footer.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__footer__["a"]; });


/***/ }),

/***/ "./components/menu/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu__ = __webpack_require__("./components/menu/menu.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__menu__["a"]; });


/***/ }),

/***/ "./components/menu/menu.css":
/***/ (function(module, exports) {

module.exports = {
	"container": "_3gaHK69gNcc-UPrlB3V_29",
	"open": "_3fSFQBiayPDugr0-dBRL3F",
	"dropdown": "_1zNxHTZcC_Ed7qGzl4h4BA",
	"active": "rB7o2U1kUzFmsV0dtICiv"
};

/***/ }),

/***/ "./components/menu/menu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_animejs__ = __webpack_require__("animejs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_animejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_animejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_css__ = __webpack_require__("./components/menu/menu.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__menu_css__);
var _jsxFileName = '/Users/snaerthoroddsson/Projects/straumverk_new/components/menu/menu.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






// Styles


var Menu = function (_Component) {
  _inherits(Menu, _Component);

  function Menu() {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
  }

  _createClass(Menu, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.open) {
        this.animateNavLinks();
      }
    }
  }, {
    key: 'animateNavLinks',
    value: function animateNavLinks() {
      var tl = __WEBPACK_IMPORTED_MODULE_4_animejs___default.a.timeline({
        targets: this.ul.children,
        duration: 600,
        easing: 'easeOutQuint',
        delay: function delay(t, i) {
          return i * 100 + 100;
        }
      });

      tl.add({
        translateX: '-100%',
        opacity: {
          value: 0
        },
        duration: 0
      }).add({
        translateX: '0%',
        opacity: {
          value: 1,
          duration: 700
        },
        delay: function delay(t, i) {
          return i * 100 + 100;
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          open = _props.open,
          t = _props.t;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(__WEBPACK_IMPORTED_MODULE_5__menu_css___default.a.container, open ? __WEBPACK_IMPORTED_MODULE_5__menu_css___default.a.open : ''), __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_5__menu_css___default.a.dropdown, __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'ul',
            { ref: function ref(c) {
                return _this2.ul = c;
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 48
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 49
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                  }
                },
                t.aboutUs
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 52
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                  }
                },
                t.specialField
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 55
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                  }
                },
                t.projects
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 58
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                  }
                },
                t.partners
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 61
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                  }
                },
                t.employees
              )
            )
          )
        )
      );
    }
  }]);

  return Menu;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Menu.propTypes = {
  open: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (Menu);

/***/ }),

/***/ "./components/navigation/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__navigation__ = __webpack_require__("./components/navigation/navigation.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__navigation__["a"]; });


/***/ }),

/***/ "./components/navigation/navigation.css":
/***/ (function(module, exports) {

module.exports = {
	"navbarBackground": "_1uJmI3JZwfT7nT7555uYNM",
	"shadow": "_3dYmPzS0-NNJeZMBHbjznA",
	"menu": "_3wP7k_DrMZUIccMkqnK2CT",
	"navbarBrand": "_27_b-RfrL5QPVN5U6sEIDK",
	"logo": "_1N4Apt69c24EowW2A17mtF",
	"mobileItemContainer": "_2O7r4deNmK_QSxsdCCMkR9"
};

/***/ }),

/***/ "./components/navigation/navigation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_animejs__ = __webpack_require__("animejs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_animejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_animejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_responsive__ = __webpack_require__("react-responsive");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_responsive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_responsive__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_actions__ = __webpack_require__("./common/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navigation_css__ = __webpack_require__("./components/navigation/navigation.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navigation_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__navigation_css__);
var _jsxFileName = '/Users/snaerthoroddsson/Projects/straumverk_new/components/navigation/navigation.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var Navigation = function (_Component) {
  _inherits(Navigation, _Component);

  function Navigation(props) {
    _classCallCheck(this, Navigation);

    var _this = _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).call(this, props));

    _this.state = {
      sections: null
    };
    _this.changeLang = _this.changeLang.bind(_this);
    _this.toggleMenu = _this.toggleMenu.bind(_this);
    _this.clickHandler = _this.clickHandler.bind(_this);
    return _this;
  }

  _createClass(Navigation, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        sections: Array.from(document.querySelectorAll('[class*="section-"]'))
      });
    }

    /**
     * Handles scroll to section animation
     * @param {Object} evt
     */

  }, {
    key: 'clickHandler',
    value: function clickHandler(evt) {
      evt.preventDefault();
      var sections = this.state.sections;

      var id = parseInt(evt.target.getAttribute('data-id'), 10);
      var sectionId = 'section-' + id;
      var section = sections.find(function (section) {
        return section.className.includes(sectionId);
      });

      if (section) {
        var _section$getBoundingC = section.getBoundingClientRect(),
            top = _section$getBoundingC.top;

        var navHeight = this.navbar.clientHeight;
        var scroll = {
          y: window.pageYOffset
        };

        __WEBPACK_IMPORTED_MODULE_4_animejs___default()({
          targets: scroll,
          y: top + window.pageYOffset - navHeight,
          duration: 350,
          easing: 'easeInOutCubic',
          update: function update() {
            return window.scroll(0, scroll.y);
          }
        });
      }
    }

    /**
     * Gets and changes default language
     *
     * @param {String} lang - Language key
     */

  }, {
    key: 'changeLang',
    value: function changeLang(lang) {
      this.props.actions.getTranslations(lang);
    }
  }, {
    key: 'toggleMenu',
    value: function toggleMenu() {
      this.props.actions.toggleMenu(!this.props.menuOpen);
    }

    /**
     * Renders default global language
     */

  }, {
    key: 'renderLang',
    value: function renderLang() {
      var _this2 = this;

      var _props = this.props,
          t = _props.t,
          lang = _props.lang,
          avaliableLang = _props.avaliableLang;


      return avaliableLang.map(function (item) {
        if (item !== lang) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { className: 'navbar-item', key: item, onClick: function onClick() {
                return _this2.changeLang(item);
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 80
              }
            },
            item.toUpperCase()
          );
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          t = _props2.t,
          menuOpen = _props2.menuOpen;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'nav',
        { className: __WEBPACK_IMPORTED_MODULE_9__navigation_css___default.a.navbarBackground, __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__navigation_css___default.a.shadow, 'navbar is-fixed-top'), ref: function ref(r) {
              return _this3.navbar = r;
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'container', __source: {
                fileName: _jsxFileName,
                lineNumber: 94
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'navbar-brand', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 95
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__navigation_css___default.a.navbarBrand, 'navbar-item', 'title is-4'), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/static/img/logo.svg', alt: 'Straumverk', className: __WEBPACK_IMPORTED_MODULE_9__navigation_css___default.a.logo, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                  }
                }),
                ' STRAUMVERK'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_react_responsive___default.a,
                { query: '(max-width: 1023px)', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: __WEBPACK_IMPORTED_MODULE_9__navigation_css___default.a.mobileItemContainer, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 100
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { className: 'navbar-item', 'data-id': 1, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 101
                      }
                    },
                    t.operations
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { className: 'navbar-item', 'data-id': 2, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 104
                      }
                    },
                    t.aboutus
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { className: 'navbar-item', 'data-id': 3, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 107
                      }
                    },
                    t.contact
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'navbar-menu', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 113
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'navbar-end', onClick: this.clickHandler, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 114
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { className: 'navbar-item', 'data-id': 1, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 115
                    }
                  },
                  t.operations
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { className: 'navbar-item', 'data-id': 2, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 118
                    }
                  },
                  t.aboutus
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { className: 'navbar-item', 'data-id': 3, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 121
                    }
                  },
                  t.contact
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Navigation;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Navigation.propTypes = {
  t: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired,
  lang: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired
};

/**
 * Maps redux state to props
 *
 * @param {Object} state
 */
function mapStateToProps(state) {
  var _state$common = state.common,
      avaliableLang = _state$common.avaliableLang,
      menuOpen = _state$common.menuOpen;


  return {
    avaliableLang: avaliableLang,
    menuOpen: menuOpen
  };
}

/**
 * Maps dispatch to props
 *
 * @param {Object} state
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: Object(__WEBPACK_IMPORTED_MODULE_6_redux__["bindActionCreators"])({ getTranslations: __WEBPACK_IMPORTED_MODULE_8__common_actions__["a" /* getTranslations */], toggleMenu: __WEBPACK_IMPORTED_MODULE_8__common_actions__["c" /* toggleMenu */] }, dispatch)
  };
}

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(Navigation));

/***/ }),

/***/ "./components/section/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__section__ = __webpack_require__("./components/section/section.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__section__["a"]; });


/***/ }),

/***/ "./components/section/section.css":
/***/ (function(module, exports) {

module.exports = {
	"container": "_1Z5oshflTfpw5zMbBL0Dfr",
	"odd": "C1T1uxQcE9pt19x-ss3r-",
	"contentContainer": "DX1yhGKowsH2fgmHY_uZi",
	"imgDefaultContainers": "_37FObub0x0KYZK3CkOeYQm"
};

/***/ }),

/***/ "./components/section/section.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_waypoint__ = __webpack_require__("react-waypoint");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_waypoint___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_waypoint__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_shortid__ = __webpack_require__("shortid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_shortid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_shortid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_animejs__ = __webpack_require__("animejs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_animejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_animejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_responsive__ = __webpack_require__("react-responsive");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_responsive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_responsive__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__section_css__ = __webpack_require__("./components/section/section.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__section_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__section_css__);
var _jsxFileName = '/Users/snaerthoroddsson/Projects/straumverk_new/components/section/section.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var Section = function (_Component) {
  _inherits(Section, _Component);

  function Section(props) {
    _classCallCheck(this, Section);

    var _this = _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).call(this, props));

    _this.onEnter = _this.onEnter.bind(_this);
    _this.tl = null;
    _this.hasAnimated = false;
    return _this;
  }

  _createClass(Section, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.tl = __WEBPACK_IMPORTED_MODULE_5_animejs___default.a.timeline();
    }
  }, {
    key: 'onEnter',
    value: function onEnter(_ref) {
      var currentPosition = _ref.currentPosition,
          previousPosition = _ref.previousPosition;

      if (this.hasAnimated === false) {
        this.tl.add({
          targets: this.imgContainer,
          duration: 0,
          translateX: this.props.switch ? -100 : 100
        }).add({
          targets: [this.content.children[0], this.content.children[1]],
          duration: 2000,
          easing: 'easeOutQuint',
          delay: function delay(t, i) {
            return i * 100 + 200;
          },
          translateY: -50,
          opacity: [0, 1]
        }).add({
          targets: this.imgContainer,
          offset: '-=1200', // Starts 1000ms before the previous animation ends
          duration: 1200,
          easing: 'easeOutQuint',
          delay: function delay(t, i) {
            return i * 100 + 100;
          },
          translateX: 0,
          opacity: [0, 1]
        });

        this.hasAnimated = true;
      }
    }

    /**
     * Renders section content
     *
     * @param {Boolean} isVisible
     */

  }, {
    key: 'renderText',
    value: function renderText() {
      var _this2 = this;

      var _props = this.props,
          title = _props.title,
          desc = _props.desc,
          img = _props.img,
          id = _props.id,
          children = _props.children;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()('section-' + id, __WEBPACK_IMPORTED_MODULE_7__section_css___default.a.contentContainer),
          key: __WEBPACK_IMPORTED_MODULE_4_shortid___default.a.generate(),
          ref: function ref(r) {
            return _this2.content = r;
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        },
        children
      );
    }
  }, {
    key: 'renderImage',
    value: function renderImage() {
      var _this3 = this;

      var _props2 = this.props,
          img = _props2.img,
          title = _props2.title;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          key: __WEBPACK_IMPORTED_MODULE_4_shortid___default.a.generate(),
          ref: function ref(r) {
            return _this3.imgContainer = r;
          },
          className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(this.props.switch ? __WEBPACK_IMPORTED_MODULE_7__section_css___default.a.imgContainerLeft : __WEBPACK_IMPORTED_MODULE_7__section_css___default.a.imgContainer, __WEBPACK_IMPORTED_MODULE_7__section_css___default.a.imgDefaultContainers),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: img, alt: title, __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          }
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          img = _props3.img,
          title = _props3.title,
          id = _props3.id;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'section',
        { className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()('section-' + id, this.props.switch ? __WEBPACK_IMPORTED_MODULE_7__section_css___default.a.odd : ''), __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_react_waypoint___default.a,
          { onEnter: this.onEnter, bottomOffset: '100px', __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_7__section_css___default.a.container, 'container'), __source: {
                fileName: _jsxFileName,
                lineNumber: 93
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_responsive___default.a,
              { query: '(max-width: 1023px)', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 94
                }
              },
              [this.renderText(), this.renderImage()]
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_responsive___default.a,
              { query: '(min-width: 1024px)', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 97
                }
              },
              this.props.switch ? [this.renderImage(), this.renderText()] : [this.renderText(), this.renderImage()]
            )
          )
        )
      );
    }
  }]);

  return Section;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Section.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired,
  img: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  id: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
  switch: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};

/* harmony default export */ __webpack_exports__["a"] = (Section);

/***/ }),

/***/ "./components/slider/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slider__ = __webpack_require__("./components/slider/slider.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__slider__["a"]; });


/***/ }),

/***/ "./components/slider/slider.css":
/***/ (function(module, exports) {

module.exports = {
	"slideshow": "_3mQAG8KB_bTN-ppYA_RS4E",
	"slides": "v6Cc8nV4cP2a7HVfVzxMD",
	"svgFrame": "Yy2eMgoeyk6OpooEeF88u",
	"slide": "_1Mw7gSBLrCdMrkr9HK5Str",
	"current": "_1Z4SR4Hn6p958JTUkn282g",
	"img": "_320OsCHVLvOknYZsr7JWfa",
	"overlay": "_3ZKoUq4Q5yljaqWBYi1jyl",
	"slidenav": "SCd8CrIC7JWbM1B4H69B4",
	"item": "_34xqVmIiHzF0IkoWYcg9FJ",
	"title": "_3MoNsIAcgW_HZDgLdNr3v3",
	"desc": "mKABq8Hn469vnYqXNRhKP",
	"link": "_1qQuNit2FEpmov8hG7w8S_"
};

/***/ }),

/***/ "./components/slider/slider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_animejs__ = __webpack_require__("animejs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_animejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_animejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__button__ = __webpack_require__("./components/button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__slider_css__ = __webpack_require__("./components/slider/slider.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__slider_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__slider_css__);
var _jsxFileName = '/Users/snaerthoroddsson/Projects/straumverk_new/components/slider/slider.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








// From https://davidwalsh.name/javascript-debounce-function.
function debounce(func, wait, immediate) {
  var _this = this,
      _arguments = arguments;

  var timeout = void 0;

  return function () {
    var context = _this;
    var args = _arguments;
    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

var Slider = function (_Component) {
  _inherits(Slider, _Component);

  function Slider(props) {
    _classCallCheck(this, Slider);

    var _this2 = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

    _this2.state = {
      animation: {
        slides: {
          duration: 600,
          easing: 'easeOutQuint'
        },
        shape: {
          duration: 300,
          easing: { in: 'easeOutQuint', out: 'easeOutQuad' }
        }
      },
      current: 0,
      slideshow: null,
      slides: null,
      rect: null,
      shape: null,
      frameFill: '#f1f1f1',
      frameSize: 0,
      paths: null,
      dir: 'next'
    };

    _this2.nextSlide = _this2.nextSlide.bind(_this2);
    _this2.prevSlide = _this2.prevSlide.bind(_this2);
    _this2.handleKeyDown = _this2.handleKeyDown.bind(_this2);
    return _this2;
  }

  _createClass(Slider, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      setTimeout(function () {
        var rect = _this3.slideshow.getBoundingClientRect();
        _this3.setState({
          rect: rect,
          slideshow: _this3.slideshow,
          slides: _this3.slides,
          frameSize: rect.width / 14
        }, function () {
          _this3.createFrame();
        });

        window.addEventListener('resize', debounce(function () {
          _this3.setState({ rect: _this3.slideshow.getBoundingClientRect() });
          _this3.updateFrame();
        }, 20));
        document.addEventListener('keydown', _this3.handleKeyDown, true);
      }, 0);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyDown, false);
    }
  }, {
    key: 'createFrame',
    value: function createFrame() {
      var _state = this.state,
          rect = _state.rect,
          frameFill = _state.frameFill,
          slideshow = _state.slideshow;

      var frameSize = rect.width / 14;
      var paths = {
        initial: this.calculatePath('initial'),
        final: this.calculatePath('final')
      };
      var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('class', 'shape');
      svg.setAttribute('width', '100%');
      svg.setAttribute('height', '100%');
      svg.setAttribute('class', __WEBPACK_IMPORTED_MODULE_5__slider_css___default.a.svgFrame);
      svg.setAttribute('viewbox', '0 0 ' + rect.width + ' ' + rect.height);
      svg.innerHTML = '<path fill="' + frameFill + '" d="' + paths.initial + '"/>';
      slideshow.insertBefore(svg, this.slidenav);
      var shape = svg.querySelector('path');

      this.setState({ shape: shape, svg: svg, frameSize: frameSize, paths: paths });
    }
  }, {
    key: 'updateFrame',
    value: function updateFrame() {
      var _state2 = this.state,
          paths = _state2.paths,
          svg = _state2.svg,
          shape = _state2.shape,
          isAnimating = _state2.isAnimating,
          rect = _state2.rect;

      paths.initial = this.calculatePath('initial');
      paths.final = this.calculatePath('final');
      svg.setAttribute('viewbox', '0 0 ' + rect.width + ' ' + rect.height);
      shape.setAttribute('d', this.isAnimating ? paths.final : paths.initial);
    }
  }, {
    key: 'calculatePath',
    value: function calculatePath() {
      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'initial';
      var _state3 = this.state,
          rect = _state3.rect,
          frameSize = _state3.frameSize;


      return path === 'initial' ? 'M 0,0 0,' + rect.height + ' ' + rect.width + ',' + rect.height + ' ' + rect.width + ',0 0,0 Z M 0,0 ' + rect.width + ',0 ' + rect.width + ',' + rect.height + ' 0,' + rect.height + ' Z' : 'M 0,0 0,' + rect.height + ' ' + rect.width + ',' + rect.height + ' ' + rect.width + ',0 0,0 Z M ' + frameSize + ',' + frameSize + ' ' + (rect.width - frameSize) + ',' + frameSize + ' ' + (rect.width - frameSize) + ',' + (rect.height - frameSize) + ' ' + frameSize + ',' + (rect.height - frameSize) + ' Z';
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(ev) {
      var keyCode = ev.keyCode || ev.which;
      if (keyCode === 37) {
        this.prevSlide();
      } else if (keyCode === 39) {
        this.nextSlide();
      }
    }
  }, {
    key: 'nextSlide',
    value: function nextSlide() {
      this.navigate('next');
    }
  }, {
    key: 'prevSlide',
    value: function prevSlide() {
      this.navigate('prev');
    }
  }, {
    key: 'navigate',
    value: function navigate() {
      var _this4 = this;

      var dir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'next';
      var _state4 = this.state,
          shape = _state4.shape,
          paths = _state4.paths,
          slides = _state4.slides,
          slideshow = _state4.slideshow,
          animation = _state4.animation,
          width = _state4.rect.width;
      var current = this.state.current;


      if (this.isAnimating) return false;
      this.isAnimating = true;

      var animateShapeIn = __WEBPACK_IMPORTED_MODULE_3_animejs___default()({
        targets: shape,
        duration: animation.shape.duration,
        easing: animation.shape.easing.in,
        d: paths.final
      });

      var animateSlides = function animateSlides() {
        return new Promise(function (resolve, reject) {
          var currentSlide = slides.children[current];
          var slidesTotal = slides.children.length;

          __WEBPACK_IMPORTED_MODULE_3_animejs___default()({
            targets: currentSlide,
            duration: animation.slides.duration,
            easing: animation.slides.easing,
            translateX: dir === 'next' ? -1 * width : width,
            complete: function complete() {
              currentSlide.classList.remove(__WEBPACK_IMPORTED_MODULE_5__slider_css___default.a.current);
              resolve();
            }
          });

          current = dir === 'next' ? current < slidesTotal - 1 ? current + 1 : 0 : current > 0 ? current - 1 : slidesTotal - 1;

          var newSlide = slides.children[current];
          newSlide.classList.add(__WEBPACK_IMPORTED_MODULE_5__slider_css___default.a.current);

          __WEBPACK_IMPORTED_MODULE_3_animejs___default()({
            targets: newSlide,
            duration: animation.slides.duration,
            easing: animation.slides.easing,
            translateX: [dir === 'next' ? width : -1 * width, 0]
          });

          var newSlideImg = newSlide;
          __WEBPACK_IMPORTED_MODULE_3_animejs___default.a.remove(newSlideImg);

          __WEBPACK_IMPORTED_MODULE_3_animejs___default()({
            targets: newSlideImg,
            duration: animation.slides.duration,
            easing: animation.slides.easing,
            translateX: [dir === 'next' ? 200 : -200, 0]
          });

          var targets = [];
          for (var i = 0; i < newSlide.children.length; i++) {
            targets.push(newSlide.children[i]);
          }

          __WEBPACK_IMPORTED_MODULE_3_animejs___default()({
            targets: targets,
            duration: animation.slides.duration * 2,
            easing: animation.slides.easing,
            delay: function delay(t, i) {
              return i * 100 + 100;
            },
            translateX: [dir === 'next' ? 300 : -300, 0],
            opacity: [0, 1]
          });
        });
      };

      var animateShapeOut = function animateShapeOut() {
        __WEBPACK_IMPORTED_MODULE_3_animejs___default()({
          targets: shape,
          duration: animation.shape.duration,
          delay: 150,
          easing: animation.shape.easing.out,
          d: paths.initial,
          complete: function complete() {
            _this4.isAnimating = false;
            _this4.setState({ current: current });
          }
        });
      };

      animateShapeIn.finished.then(animateSlides).then(animateShapeOut);
    }
  }, {
    key: 'renderSlides',
    value: function renderSlides() {
      var current = this.state.current;
      var slides = this.props.slides;


      return slides.map(function (slide, i) {
        var image = slide.image,
            title = slide.title,
            desc = slide.desc,
            link = slide.link;


        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { key: i, className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_5__slider_css___default.a.slide, current === i ? __WEBPACK_IMPORTED_MODULE_5__slider_css___default.a.current : ''), __source: {
              fileName: _jsxFileName,
              lineNumber: 241
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_5__slider_css___default.a.img, style: { backgroundImage: 'url(' + image + ')' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 242
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_5__slider_css___default.a.overlay, __source: {
                fileName: _jsxFileName,
                lineNumber: 243
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            { className: __WEBPACK_IMPORTED_MODULE_5__slider_css___default.a.title, __source: {
                fileName: _jsxFileName,
                lineNumber: 246
              }
            },
            title
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p', {
            className: __WEBPACK_IMPORTED_MODULE_5__slider_css___default.a.desc,
            dangerouslySetInnerHTML: {
              __html: desc
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 247
            }
          }),
          link ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4__button__["a" /* default */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 253
              }
            },
            link
          ) : null
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var t = this.props.t;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_5__slider_css___default.a.slideshow, ref: function ref(r) {
            return _this5.slideshow = r;
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 263
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_5__slider_css___default.a.slides, ref: function ref(r) {
              return _this5.slides = r;
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 264
            }
          },
          this.renderSlides()
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'nav',
          { className: __WEBPACK_IMPORTED_MODULE_5__slider_css___default.a.slidenav, ref: function ref(r) {
              return _this5.slidenav = r;
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 267
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_5__slider_css___default.a.item, __WEBPACK_IMPORTED_MODULE_5__slider_css___default.a.prev), onClick: function onClick() {
                return _this5.prevSlide();
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 268
              }
            },
            t.prev
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 271
              }
            },
            '/'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_5__slider_css___default.a.item, __WEBPACK_IMPORTED_MODULE_5__slider_css___default.a.next), onClick: function onClick() {
                return _this5.nextSlide();
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 272
              }
            },
            t.next
          )
        )
      );
    }
  }]);

  return Slider;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Slider.propTypes = {
  slides: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
  t: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (Slider);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_redux_wrapper__ = __webpack_require__("next-redux-wrapper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_redux_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_redux_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_actions__ = __webpack_require__("./common/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_types__ = __webpack_require__("./common/types.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_store__ = __webpack_require__("./common/store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_navigation__ = __webpack_require__("./components/navigation/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_slider__ = __webpack_require__("./components/slider/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_menu__ = __webpack_require__("./components/menu/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_section__ = __webpack_require__("./components/section/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_button__ = __webpack_require__("./components/button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_footer__ = __webpack_require__("./components/footer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_isomorphic_unfetch__);

var _jsxFileName = '/Users/snaerthoroddsson/Projects/straumverk_new/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
















var Index = function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          t = _props.t,
          lang = _props.lang,
          menuOpen = _props.menuOpen;


      var slides = [{
        image: '/static/img/electric3.jpg',
        title: 'Straumverk',
        desc: 'Allt sem þú þarft á einum stað'
      }, {
        image: '/static/img/electric1.jpg',
        title: t.operations,
        desc: t.specialFieldShortDesc
      }, {
        image: '/static/img/electric2.jpg',
        title: t.contact,
        desc: t.contactDesc
      }];

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'div',
        {
          className: 'jsx-1072911852',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_next_head___default.a,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'title',
            {
              className: 'jsx-1072911852',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 54
              }
            },
            'Straumverk'
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', className: 'jsx-1072911852',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            }
          }),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('link', { rel: 'stylesheet', href: '/static/css/bulma.min.css', className: 'jsx-1072911852',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            }
          }),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('link', { rel: 'stylesheet', href: '/static/css/base.css', className: 'jsx-1072911852',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            }
          }),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('link', { rel: 'stylesheet', href: '/static/css/style.css', className: 'jsx-1072911852',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'main',
          {
            className: 'jsx-1072911852',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_navigation__["a" /* default */], { t: t, lang: lang, __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          }),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_menu__["a" /* default */], { open: menuOpen, t: t, __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            }
          }),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_slider__["a" /* default */], { slides: slides, t: t, __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            }
          }),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_12__components_section__["a" /* default */],
            { img: '/static/img/electric3.jpg', id: 1, 'switch': true, __source: {
                fileName: _jsxFileName,
                lineNumber: 65
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'h2',
              {
                className: 'jsx-1072911852',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 66
                }
              },
              t.operations
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'p',
              {
                className: 'jsx-1072911852',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 67
                }
              },
              t.operationsDesc
            )
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_12__components_section__["a" /* default */],
            { img: '/static/img/electric1.jpg', id: 2, __source: {
                fileName: _jsxFileName,
                lineNumber: 69
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'h2',
              {
                className: 'jsx-1072911852',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 70
                }
              },
              t.aboutus
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'p',
              {
                className: 'jsx-1072911852',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 71
                }
              },
              t.aboutusDesc
            )
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_12__components_section__["a" /* default */],
            { img: '/static/img/electric2.jpg', id: 3, 'switch': true, __source: {
                fileName: _jsxFileName,
                lineNumber: 73
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'h2',
              {
                className: 'jsx-1072911852',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 74
                }
              },
              t.contact
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('p', {
              dangerouslySetInnerHTML: {
                __html: t.contactDesc
              },
              className: 'jsx-1072911852',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 75
              }
            }),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'div',
              {
                className: 'jsx-1072911852' + ' ' + 'has-text-centered',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 80
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'a',
                { href: 'mailto:straumverk@straumverk.is', className: 'jsx-1072911852',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_13__components_button__["a" /* default */],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 82
                    }
                  },
                  t.contact
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__components_footer__["a" /* default */], { t: t, __source: {
              fileName: _jsxFileName,
              lineNumber: 86
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
          styleId: '1072911852',
          css: 'body{padding-top:3.25rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVGMkIsQUFHaUMsb0JBQ3RCIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zbmFlcnRob3JvZGRzc29uL1Byb2plY3RzL3N0cmF1bXZlcmtfbmV3Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5pbXBvcnQgeyBzZXRUcmFuc2xhdGlvbnMgfSBmcm9tICcuLi9jb21tb24vYWN0aW9ucyc7XG5pbXBvcnQgeyBTRVRfTEFORyB9IGZyb20gJy4uL2NvbW1vbi90eXBlcyc7XG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi4vY29tbW9uL3N0b3JlJztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2aWdhdGlvbic7XG5pbXBvcnQgU2xpZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvc2xpZGVyJztcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvbWVudSc7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb24nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJztcbmltcG9ydCAnaXNvbW9ycGhpYy11bmZldGNoJztcblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxLCBzdG9yZSB9KSB7XG4gICAgY29uc3QgbGFuZyA9IHJlcS5jb29raWVzICYmIHJlcS5jb29raWVzLmxhbmcgPyByZXEuY29va2llcy5sYW5nIDogJ2lzJztcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5MT0NBTF9VUkx9L3N0YXRpYy9sYW5nLyR7bGFuZ30uanNvbmApO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICBsYW5nLFxuICAgICAgdHJhbnNsYXRpb25zOiBqc29uLFxuICAgIH07XG5cbiAgICBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6IFNFVF9MQU5HLCBwYXlsb2FkIH0pO1xuICAgIHJldHVybiB7IHQ6IGpzb24sIGxhbmcgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHQsIGxhbmcsIG1lbnVPcGVuIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3Qgc2xpZGVzID0gW1xuICAgICAge1xuICAgICAgICBpbWFnZTogJy9zdGF0aWMvaW1nL2VsZWN0cmljMy5qcGcnLFxuICAgICAgICB0aXRsZTogJ1N0cmF1bXZlcmsnLFxuICAgICAgICBkZXNjOiAnQWxsdCBzZW0gw77DuiDDvmFyZnQgw6EgZWludW0gc3Rhw7AnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaW1hZ2U6ICcvc3RhdGljL2ltZy9lbGVjdHJpYzEuanBnJyxcbiAgICAgICAgdGl0bGU6IHQub3BlcmF0aW9ucyxcbiAgICAgICAgZGVzYzogdC5zcGVjaWFsRmllbGRTaG9ydERlc2MsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbWFnZTogJy9zdGF0aWMvaW1nL2VsZWN0cmljMi5qcGcnLFxuICAgICAgICB0aXRsZTogdC5jb250YWN0LFxuICAgICAgICBkZXNjOiB0LmNvbnRhY3REZXNjLFxuICAgICAgfSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5TdHJhdW12ZXJrPC90aXRsZT5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3RhdGljL2Nzcy9idWxtYS5taW4uY3NzXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdGF0aWMvY3NzL2Jhc2UuY3NzXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdGF0aWMvY3NzL3N0eWxlLmNzc1wiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgPE5hdmlnYXRpb24gdD17dH0gbGFuZz17bGFuZ30gLz5cbiAgICAgICAgICA8TWVudSBvcGVuPXttZW51T3Blbn0gdD17dH0gLz5cbiAgICAgICAgICA8U2xpZGVyIHNsaWRlcz17c2xpZGVzfSB0PXt0fSAvPlxuXG4gICAgICAgICAgPFNlY3Rpb24gaW1nPVwiL3N0YXRpYy9pbWcvZWxlY3RyaWMzLmpwZ1wiIGlkPXsxfSBzd2l0Y2g+XG4gICAgICAgICAgICA8aDI+e3Qub3BlcmF0aW9uc308L2gyPlxuICAgICAgICAgICAgPHA+e3Qub3BlcmF0aW9uc0Rlc2N9PC9wPlxuICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgICA8U2VjdGlvbiBpbWc9XCIvc3RhdGljL2ltZy9lbGVjdHJpYzEuanBnXCIgaWQ9ezJ9PlxuICAgICAgICAgICAgPGgyPnt0LmFib3V0dXN9PC9oMj5cbiAgICAgICAgICAgIDxwPnt0LmFib3V0dXNEZXNjfTwvcD5cbiAgICAgICAgICA8L1NlY3Rpb24+XG4gICAgICAgICAgPFNlY3Rpb24gaW1nPVwiL3N0YXRpYy9pbWcvZWxlY3RyaWMyLmpwZ1wiIGlkPXszfSBzd2l0Y2g+XG4gICAgICAgICAgICA8aDI+e3QuY29udGFjdH08L2gyPlxuICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICBfX2h0bWw6IHQuY29udGFjdERlc2MsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYXMtdGV4dC1jZW50ZXJlZFwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOnN0cmF1bXZlcmtAc3RyYXVtdmVyay5pc1wiPlxuICAgICAgICAgICAgICAgIDxCdXR0b24+e3QuY29udGFjdH08L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgIDxGb290ZXIgdD17dH0gLz5cbiAgICAgICAgPC9tYWluPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDMuMjVyZW07XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbi8qKlxuICogTWFwcyByZWR1eCBzdGF0ZSB0byBwcm9wc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZVxuICovXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgY29uc3QgeyB0cmFuc2xhdGlvbnMsIGxhbmcsIG1lbnVPcGVuIH0gPSBzdGF0ZS5jb21tb247XG4gIHJldHVybiB7XG4gICAgdDogdHJhbnNsYXRpb25zLFxuICAgIGxhbmcsXG4gICAgbWVudU9wZW4sXG4gIH07XG59XG5cbi8qKlxuICogTWFwcyBkaXNwYXRjaCB0byBwcm9wc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZVxuICovXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIHtcbiAgICBzZXRUcmFuc2xhdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhzZXRUcmFuc2xhdGlvbnMsIGRpc3BhdGNoKSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KGNvbmZpZ3VyZVN0b3JlLCBtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSW5kZXgpO1xuIl19 */\n/*@ sourceURL=pages/index.js */'
        })
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var req = _ref.req,
            store = _ref.store;
        var lang, res, json, payload;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                lang = req.cookies && req.cookies.lang ? req.cookies.lang : 'is';
                _context.next = 3;
                return fetch("http://localhost:3000" + '/static/lang/' + lang + '.json');

              case 3:
                res = _context.sent;
                _context.next = 6;
                return res.json();

              case 6:
                json = _context.sent;
                payload = {
                  lang: lang,
                  translations: json
                };


                store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_7__common_types__["a" /* SET_LANG */], payload: payload });
                return _context.abrupt('return', { t: json, lang: lang });

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

/**
 * Maps redux state to props
 *
 * @param {Object} state
 */


function mapStateToProps(state) {
  var _state$common = state.common,
      translations = _state$common.translations,
      lang = _state$common.lang,
      menuOpen = _state$common.menuOpen;

  return {
    t: translations,
    lang: lang,
    menuOpen: menuOpen
  };
}

/**
 * Maps dispatch to props
 *
 * @param {Object} state
 */
function mapDispatchToProps(dispatch) {
  return {
    setTranslations: Object(__WEBPACK_IMPORTED_MODULE_4_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_6__common_actions__["b" /* setTranslations */], dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_5_next_redux_wrapper___default()(__WEBPACK_IMPORTED_MODULE_8__common_store__["a" /* default */], mapStateToProps, mapDispatchToProps)(Index));

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "animejs":
/***/ (function(module, exports) {

module.exports = require("animejs");

/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "classnames":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next-redux-wrapper":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-responsive":
/***/ (function(module, exports) {

module.exports = require("react-responsive");

/***/ }),

/***/ "react-waypoint":
/***/ (function(module, exports) {

module.exports = require("react-waypoint");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "shortid":
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map