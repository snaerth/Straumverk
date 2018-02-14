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

/***/ }),

/***/ "./common/reducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types__ = __webpack_require__("./common/types.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



var initialState = {
  avaliableLang: ['is', 'en'],
  lang: 'is',
  translations: null
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
// Common
var SET_LANG = 'set_lang';

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
	"navbarBackground": "_1uJmI3JZwfT7nT7555uYNM"
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_actions__ = __webpack_require__("./common/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navigation_css__ = __webpack_require__("./components/navigation/navigation.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navigation_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__navigation_css__);
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

    _this.changeLang = _this.changeLang.bind(_this);
    return _this;
  }

  /**
   * Gets and changes default language
   *
   * @param {String} lang - Language key
   */


  _createClass(Navigation, [{
    key: 'changeLang',
    value: function changeLang(lang) {
      this.props.getTranslations(lang);
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
                lineNumber: 34
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
      var t = this.props.t;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'nav',
        { className: __WEBPACK_IMPORTED_MODULE_6__navigation_css___default.a.navbarBackground, __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container', __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'navbar', __source: {
                fileName: _jsxFileName,
                lineNumber: 48
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'navbar-brand', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 49
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
                { href: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { className: 'navbar-item title is-4', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 51
                    }
                  },
                  'New Nordic'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'navbar-menu', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 54
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'navbar-end', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { className: 'navbar-item', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 56
                    }
                  },
                  t.aboutUs
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { className: 'navbar-item', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 57
                    }
                  },
                  t.specialField
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { className: 'navbar-item', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 58
                    }
                  },
                  t.projects
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { className: 'navbar-item', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 59
                    }
                  },
                  t.partners
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { className: 'navbar-item', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 60
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
  t: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired
};

/**
 * Maps redux state to props
 *
 * @param {Object} state
 */
function mapStateToProps(state) {
  var _state$common = state.common,
      translations = _state$common.translations,
      avaliableLang = _state$common.avaliableLang,
      lang = _state$common.lang;


  return {
    t: translations,
    avaliableLang: avaliableLang,
    lang: lang
  };
}

/**
 * Maps dispatch to props
 *
 * @param {Object} state
 */
function mapDispatchToProps(dispatch) {
  return {
    getTranslations: Object(__WEBPACK_IMPORTED_MODULE_4_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_5__common_actions__["a" /* getTranslations */], dispatch)
  };
}

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(Navigation));

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
var _jsxFileName = '/Users/snaerthoroddsson/Projects/new_nordic/components/slider/slider.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var SLIDES = [{
  image: '/static/img/25.jpg',
  title: 'Colossal 1',
  desc: 'A matter of delicate proportions and aesthetics.',
  link: 'Explore our works'
}, {
  image: '/static/img/28.jpg',
  title: 'Colossal 2',
  desc: 'A matter of delicate proportions and aesthetics.',
  link: 'Explore our works'
}, {
  image: '/static/img/27.jpg',
  title: 'Colossal 3',
  desc: 'A matter of delicate proportions and aesthetics.',
  link: 'Explore our works'
}];

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
      isAnimating: false,
      dir: 'next'
    };

    _this2.nextSlide = _this2.nextSlide.bind(_this2);
    _this2.prevSlide = _this2.prevSlide.bind(_this2);
    _this2.handleKeyDown = _this2.handleKeyDown.bind(_this2);
    _this2.animateShapeOut = _this2.animateShapeOut.bind(_this2);
    _this2.animateSlides = _this2.animateSlides.bind(_this2);
    return _this2;
  }

  _createClass(Slider, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      var rect = this.slideshow.getBoundingClientRect();
      this.setState({
        rect: rect,
        slideshow: this.slideshow,
        slides: this.slides,
        frameSize: rect.width / 12
      }, function () {
        _this3.createFrame();
      });

      window.addEventListener('resize', debounce(function () {
        _this3.setState({ rect: _this3.slideshow.getBoundingClientRect() });
        _this3.updateFrame();
      }, 20));
      document.addEventListener('keydown', this.handleKeyDown, true);
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

      var frameSize = rect.width / 12;
      var paths = {
        initial: this.calculatePath('initial'),
        final: this.calculatePath('final')
      };
      var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('class', 'shape');
      svg.setAttribute('width', '100%');
      svg.setAttribute('height', '100%');
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
      shape.setAttribute('d', isAnimating ? paths.final : paths.initial);
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
          isAnimating = _state4.isAnimating,
          shape = _state4.shape,
          animation = _state4.animation,
          paths = _state4.paths;


      if (isAnimating) {
        return false;
      }

      this.setState({ isAnimating: true, dir: dir }, function () {
        var animateShapeIn = __WEBPACK_IMPORTED_MODULE_3_animejs___default()({
          targets: shape,
          duration: animation.shape.duration,
          easing: animation.shape.easing.in,
          d: paths.final
        });

        animateShapeIn.finished.then(_this4.animateSlides).then(_this4.animateShapeOut);
      });
    }
  }, {
    key: 'animateShapeOut',
    value: function animateShapeOut() {
      var _this5 = this;

      var _state5 = this.state,
          shape = _state5.shape,
          paths = _state5.paths,
          animation = _state5.animation,
          isAnimating = _state5.isAnimating;


      __WEBPACK_IMPORTED_MODULE_3_animejs___default()({
        targets: shape,
        duration: animation.shape.duration,
        delay: 150,
        easing: animation.shape.easing.out,
        d: paths.initial,
        complete: function complete() {
          _this5.setState({
            isAnimating: false
          });
        }
      });
    }

    /**
     * Animages slides
     */

  }, {
    key: 'animateSlides',
    value: function animateSlides() {
      var _this6 = this;

      console.log('Jojo nothing happening');
      return new Promise(function (resolve, reject) {
        var _state6 = _this6.state,
            shape = _state6.shape,
            isAnimating = _state6.isAnimating,
            paths = _state6.paths,
            slides = _state6.slides,
            slideshow = _state6.slideshow,
            animation = _state6.animation,
            dir = _state6.dir,
            width = _state6.rect.width;

        console.log(_this6.state);
        var current = _this6.state.current;


        if (isAnimating) return false;

        var currentSlide = slides.children[current];
        var slidesTotal = slides.children.length;

        __WEBPACK_IMPORTED_MODULE_3_animejs___default()({
          targets: currentSlide,
          duration: animation.slides.duration,
          easing: animation.slides.easing,
          translateX: dir === 'next' ? -1 * width : width,
          complete: function complete() {
            currentSlide.classList.remove(__WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.current);
          }
        });

        current = dir === 'next' ? current < slidesTotal - 1 ? current + 1 : 0 : current > 0 ? current - 1 : slidesTotal - 1;

        _this6.setState({ current: current, isAnimating: true });

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
          duration: animation.slides.duration * 4,
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
    }
  }, {
    key: 'renderSlides',
    value: function renderSlides() {
      var current = this.state.current;


      return SLIDES.map(function (slide, i) {
        var image = slide.image,
            title = slide.title,
            desc = slide.desc,
            link = slide.link;


        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { key: i, className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.slide, current === i ? __WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.current : ''), __source: {
              fileName: _jsxFileName,
              lineNumber: 280
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.img, style: { backgroundImage: 'url(' + image + ')' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 281
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            { className: __WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.title, __source: {
                fileName: _jsxFileName,
                lineNumber: 282
              }
            },
            title
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            { className: __WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.desc, __source: {
                fileName: _jsxFileName,
                lineNumber: 283
              }
            },
            desc
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { className: __WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.link, href: '#', __source: {
                fileName: _jsxFileName,
                lineNumber: 284
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
      var _this7 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.slideshow, ref: function ref(r) {
            return _this7.slideshow = r;
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 294
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.slides, ref: function ref(r) {
              return _this7.slides = r;
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 295
            }
          },
          this.renderSlides()
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'nav',
          { className: __WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.slidenav, ref: function ref(r) {
              return _this7.slidenav = r;
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 298
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.item, __WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.prev), onClick: function onClick() {
                return _this7.prevSlide();
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 299
              }
            },
            'Previous'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 302
              }
            },
            '/'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.item, __WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.next), onClick: function onClick() {
                return _this7.nextSlide();
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 303
              }
            },
            'Next'
          )
        )
      );
    }
  }]);

  return Slider;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Slider.propTypes = {};

/* harmony default export */ __webpack_exports__["a"] = (Slider);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_redux_wrapper__ = __webpack_require__("next-redux-wrapper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_redux_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_redux_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_actions__ = __webpack_require__("./common/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_types__ = __webpack_require__("./common/types.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_store__ = __webpack_require__("./common/store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navigation__ = __webpack_require__("./components/navigation/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_slider__ = __webpack_require__("./components/slider/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_isomorphic_unfetch__);

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
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_next_head___default.a,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'title',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              }
            },
            'New Nordic'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'stylesheet', href: '/static/css/bulma.min.css', __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'stylesheet', href: '/static/css/base.css', __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'main',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_navigation__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_slider__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          })
        )
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
                lang = req.cookies.lang || 'is';
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


                store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_6__common_types__["a" /* SET_LANG */], payload: payload });
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
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/**
 * Maps redux state to props
 *
 * @param {Object} state
 */


function mapStateToProps(state) {
  var _state$common = state.common,
      translations = _state$common.translations,
      lang = _state$common.lang;

  return {
    lang: lang
  };
}

/**
 * Maps dispatch to props
 *
 * @param {Object} state
 */
function mapDispatchToProps(dispatch) {
  return {
    setTranslations: Object(__WEBPACK_IMPORTED_MODULE_3_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_5__common_actions__["b" /* setTranslations */], dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_4_next_redux_wrapper___default()(__WEBPACK_IMPORTED_MODULE_7__common_store__["a" /* default */], mapStateToProps, mapDispatchToProps)(Index));

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

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map