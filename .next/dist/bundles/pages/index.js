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
var _jsxFileName = '/Users/snaerthoroddsson/Projects/new_nordic/components/menu/menu.js';

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
	"navbarBrand": "_27_b-RfrL5QPVN5U6sEIDK"
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
var _jsxFileName = '/Users/snaerthoroddsson/Projects/new_nordic/components/navigation/navigation.js';

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
        console.log(navHeight);

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
                lineNumber: 81
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
            lineNumber: 93
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__navigation_css___default.a.shadow, 'navbar is-fixed-top'), ref: function ref(r) {
              return _this3.navbar = r;
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 94
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'container', __source: {
                fileName: _jsxFileName,
                lineNumber: 95
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'navbar-brand', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 96
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5_next_link___default.a,
                { href: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__navigation_css___default.a.navbarBrand, 'navbar-item', 'title is-4'), __source: {
                      fileName: _jsxFileName,
                      lineNumber: 98
                    }
                  },
                  'New Nordic'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_react_responsive___default.a,
                { query: '(max-width: 1023px)', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: __WEBPACK_IMPORTED_MODULE_9__navigation_css___default.a.menu, onClick: this.toggleMenu, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 101
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/static/img/menu.svg', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 102
                    }
                  })
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'navbar-menu', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 106
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'navbar-end', onClick: this.clickHandler, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { className: 'navbar-item', 'data-id': 1, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 108
                    }
                  },
                  t.aboutUs
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { className: 'navbar-item', 'data-id': 2, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 111
                    }
                  },
                  t.specialField
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { className: 'navbar-item', 'data-id': 3, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 114
                    }
                  },
                  t.projects
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { className: 'navbar-item', 'data-id': 4, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 117
                    }
                  },
                  t.partners
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { className: 'navbar-item', 'data-id': 5, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 120
                    }
                  },
                  t.employees
                ),
                this.renderLang()
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
	"title": "_2OCZ2PVL2gB9nTB-O8ELB_",
	"desc": "_2LBxAB7rSsdUgyQdC4KiLh",
	"visible": "_3eaNyK4EiD_wM_w8qswyfy",
	"notVisible": "WkUO2pUjhEIg4JTQSNn3A"
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__section_css__ = __webpack_require__("./components/section/section.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__section_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__section_css__);
var _jsxFileName = '/Users/snaerthoroddsson/Projects/new_nordic/components/section/section.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Section = function (_Component) {
  _inherits(Section, _Component);

  function Section(props) {
    _classCallCheck(this, Section);

    var _this = _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).call(this, props));

    _this.state = {
      visible: false
    };

    _this.onEnter = _this.onEnter.bind(_this);
    return _this;
  }

  _createClass(Section, [{
    key: 'onEnter',
    value: function onEnter() {
      console.log(this.content);
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
          id = _props.id;
      var visible = this.state.visible;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'section-' + id, key: __WEBPACK_IMPORTED_MODULE_4_shortid___default.a.generate(), ref: function ref(r) {
            return _this2.content = r;
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            { className: __WEBPACK_IMPORTED_MODULE_5__section_css___default.a.title, __source: {
                fileName: _jsxFileName,
                lineNumber: 35
              }
            },
            title
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_5__section_css___default.a.desc, __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          },
          desc
        )
      );
    }
  }, {
    key: 'renderImage',
    value: function renderImage() {
      var _props2 = this.props,
          img = _props2.img,
          title = _props2.title,
          id = _props2.id;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { key: __WEBPACK_IMPORTED_MODULE_4_shortid___default.a.generate(), __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: img, alt: title, __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'section',
        { className: this.props.switch ? __WEBPACK_IMPORTED_MODULE_5__section_css___default.a.odd : '', __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_react_waypoint___default.a,
          { onEnter: this.onEnter, partialVisibility: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_5__section_css___default.a.container, 'container'), __source: {
                fileName: _jsxFileName,
                lineNumber: 56
              }
            },
            this.props.switch ? [this.renderImage(), this.renderText()] : [this.renderText(), this.renderImage()]
          )
        )
      );
    }
  }]);

  return Section;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Section.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  desc: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__slider_css__ = __webpack_require__("./components/slider/slider.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__slider_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__slider_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_util__ = __webpack_require__("util");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_util__);
var _jsxFileName = '/Users/snaerthoroddsson/Projects/new_nordic/components/slider/slider.js';

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
      svg.setAttribute('class', __WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.svgFrame);
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
              currentSlide.classList.remove(__WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.current);
              resolve();
            }
          });

          current = dir === 'next' ? current < slidesTotal - 1 ? current + 1 : 0 : current > 0 ? current - 1 : slidesTotal - 1;

          var newSlide = slides.children[current];
          newSlide.classList.add(__WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.current);

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

          __WEBPACK_IMPORTED_MODULE_3_animejs___default()({
            targets: [newSlide.children[1], newSlide.children[2], newSlide.children[3]],
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
          { key: i, className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.slide, current === i ? __WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.current : ''), __source: {
              fileName: _jsxFileName,
              lineNumber: 236
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.img, style: { backgroundImage: 'url(' + image + ')' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 237
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            { className: __WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.title, __source: {
                fileName: _jsxFileName,
                lineNumber: 238
              }
            },
            title
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            { className: __WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.desc, __source: {
                fileName: _jsxFileName,
                lineNumber: 239
              }
            },
            desc
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { className: __WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.link, href: '#', __source: {
                fileName: _jsxFileName,
                lineNumber: 240
              }
            },
            link
          )
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
        { className: __WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.slideshow, ref: function ref(r) {
            return _this5.slideshow = r;
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 252
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.slides, ref: function ref(r) {
              return _this5.slides = r;
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 253
            }
          },
          this.renderSlides()
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'nav',
          { className: __WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.slidenav, ref: function ref(r) {
              return _this5.slidenav = r;
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 256
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.item, __WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.prev), onClick: function onClick() {
                return _this5.prevSlide();
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 257
              }
            },
            t.prev
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 260
              }
            },
            '/'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.item, __WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.next), onClick: function onClick() {
                return _this5.nextSlide();
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 261
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_isomorphic_unfetch__);

var _jsxFileName = '/Users/snaerthoroddsson/Projects/new_nordic/pages/index.js';

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
        image: '/static/img/25.jpg',
        title: t.specialField,
        desc: t.specialFieldShortDesc,
        link: t.specialFieldLink
      }, {
        image: '/static/img/28.jpg',
        title: t.projects,
        desc: t.projectsShortDesc,
        link: t.projectsLink
      }, {
        image: '/static/img/27.jpg',
        title: t.partners,
        desc: t.partnersShortDesc,
        link: t.partnersLink
      }];

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'div',
        {
          className: 'jsx-1072911852',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_next_head___default.a,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'title',
            {
              className: 'jsx-1072911852',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 55
              }
            },
            'New Nordic'
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', className: 'jsx-1072911852',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            }
          }),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('link', { rel: 'stylesheet', href: '/static/css/bulma.min.css', className: 'jsx-1072911852',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            }
          }),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('link', { rel: 'stylesheet', href: '/static/css/base.css', className: 'jsx-1072911852',
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
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_section__["a" /* default */], { title: t.partners, desc: t.partnersDesc, img: '/static/img/19.jpg', id: 1, __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            }
          }),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_section__["a" /* default */], {
            title: t.projects,
            desc: t.projectsDesc,
            img: '/static/img/17.jpg',
            id: 2,
            'switch': true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            }
          }),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_section__["a" /* default */], {
            title: t.specialField,
            desc: t.specialFieldDesc,
            img: '/static/img/18.jpg',
            id: 3,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
          styleId: '1072911852',
          css: 'body{padding-top:3.25rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThFMkIsQUFHaUMsb0JBQ3RCIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zbmFlcnRob3JvZGRzc29uL1Byb2plY3RzL25ld19ub3JkaWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCB7IHNldFRyYW5zbGF0aW9ucyB9IGZyb20gJy4uL2NvbW1vbi9hY3Rpb25zJztcbmltcG9ydCB7IFNFVF9MQU5HIH0gZnJvbSAnLi4vY29tbW9uL3R5cGVzJztcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuLi9jb21tb24vc3RvcmUnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uJztcbmltcG9ydCBTbGlkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zbGlkZXInO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9tZW51JztcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvc2VjdGlvbic7XG5pbXBvcnQgJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSwgc3RvcmUgfSkge1xuICAgIGNvbnN0IGxhbmcgPSByZXEuY29va2llc1snbGFuZyddIHx8ICdpcyc7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTE9DQUxfVVJMfS9zdGF0aWMvbGFuZy8ke2xhbmd9Lmpzb25gKTtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgbGFuZyxcbiAgICAgIHRyYW5zbGF0aW9uczoganNvbixcbiAgICB9O1xuXG4gICAgc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiBTRVRfTEFORywgcGF5bG9hZCB9KTtcbiAgICByZXR1cm4geyB0OiBqc29uLCBsYW5nIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0LCBsYW5nLCBtZW51T3BlbiB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHNsaWRlcyA9IFtcbiAgICAgIHtcbiAgICAgICAgaW1hZ2U6ICcvc3RhdGljL2ltZy8yNS5qcGcnLFxuICAgICAgICB0aXRsZTogdC5zcGVjaWFsRmllbGQsXG4gICAgICAgIGRlc2M6IHQuc3BlY2lhbEZpZWxkU2hvcnREZXNjLFxuICAgICAgICBsaW5rOiB0LnNwZWNpYWxGaWVsZExpbmssXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbWFnZTogJy9zdGF0aWMvaW1nLzI4LmpwZycsXG4gICAgICAgIHRpdGxlOiB0LnByb2plY3RzLFxuICAgICAgICBkZXNjOiB0LnByb2plY3RzU2hvcnREZXNjLFxuICAgICAgICBsaW5rOiB0LnByb2plY3RzTGluayxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGltYWdlOiAnL3N0YXRpYy9pbWcvMjcuanBnJyxcbiAgICAgICAgdGl0bGU6IHQucGFydG5lcnMsXG4gICAgICAgIGRlc2M6IHQucGFydG5lcnNTaG9ydERlc2MsXG4gICAgICAgIGxpbms6IHQucGFydG5lcnNMaW5rLFxuICAgICAgfSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5OZXcgTm9yZGljPC90aXRsZT5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3RhdGljL2Nzcy9idWxtYS5taW4uY3NzXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdGF0aWMvY3NzL2Jhc2UuY3NzXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICA8TmF2aWdhdGlvbiB0PXt0fSBsYW5nPXtsYW5nfSAvPlxuICAgICAgICAgIDxNZW51IG9wZW49e21lbnVPcGVufSB0PXt0fSAvPlxuICAgICAgICAgIDxTbGlkZXIgc2xpZGVzPXtzbGlkZXN9IHQ9e3R9IC8+XG4gICAgICAgICAgPFNlY3Rpb24gdGl0bGU9e3QucGFydG5lcnN9IGRlc2M9e3QucGFydG5lcnNEZXNjfSBpbWc9XCIvc3RhdGljL2ltZy8xOS5qcGdcIiBpZD17MX0gLz5cbiAgICAgICAgICA8U2VjdGlvblxuICAgICAgICAgICAgdGl0bGU9e3QucHJvamVjdHN9XG4gICAgICAgICAgICBkZXNjPXt0LnByb2plY3RzRGVzY31cbiAgICAgICAgICAgIGltZz1cIi9zdGF0aWMvaW1nLzE3LmpwZ1wiXG4gICAgICAgICAgICBpZD17Mn1cbiAgICAgICAgICAgIHN3aXRjaFxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFNlY3Rpb25cbiAgICAgICAgICAgIHRpdGxlPXt0LnNwZWNpYWxGaWVsZH1cbiAgICAgICAgICAgIGRlc2M9e3Quc3BlY2lhbEZpZWxkRGVzY31cbiAgICAgICAgICAgIGltZz1cIi9zdGF0aWMvaW1nLzE4LmpwZ1wiXG4gICAgICAgICAgICBpZD17M31cbiAgICAgICAgICAvPlxuICAgICAgICA8L21haW4+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMy4yNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuLyoqXG4gKiBNYXBzIHJlZHV4IHN0YXRlIHRvIHByb3BzXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlXG4gKi9cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICBjb25zdCB7IHRyYW5zbGF0aW9ucywgbGFuZywgbWVudU9wZW4gfSA9IHN0YXRlLmNvbW1vbjtcbiAgcmV0dXJuIHtcbiAgICB0OiB0cmFuc2xhdGlvbnMsXG4gICAgbGFuZyxcbiAgICBtZW51T3BlbixcbiAgfTtcbn1cblxuLyoqXG4gKiBNYXBzIGRpc3BhdGNoIHRvIHByb3BzXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlXG4gKi9cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICByZXR1cm4ge1xuICAgIHNldFRyYW5zbGF0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKHNldFRyYW5zbGF0aW9ucywgZGlzcGF0Y2gpLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoY29uZmlndXJlU3RvcmUsIG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShJbmRleCk7XG4iXX0= */\n/*@ sourceURL=pages/index.js */'
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
                lang = req.cookies['lang'] || 'is';
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

/***/ }),

/***/ "util":
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map