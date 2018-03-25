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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("animejs");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-responsive");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "babel-runtime/regenerator"
var regenerator_ = __webpack_require__(5);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(10);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(11);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "redux"
var external__redux_ = __webpack_require__(2);
var external__redux__default = /*#__PURE__*/__webpack_require__.n(external__redux_);

// EXTERNAL MODULE: external "next-redux-wrapper"
var external__next_redux_wrapper_ = __webpack_require__(12);
var external__next_redux_wrapper__default = /*#__PURE__*/__webpack_require__.n(external__next_redux_wrapper_);

// EXTERNAL MODULE: external "axios"
var external__axios_ = __webpack_require__(13);
var external__axios__default = /*#__PURE__*/__webpack_require__.n(external__axios_);

// CONCATENATED MODULE: ./common/types.js
// Common
var SET_LANG = 'set_lang';
var TOGGLE_MENU = 'toggle_menu';
// CONCATENATED MODULE: ./common/actions.js


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

    dispatch({ type: SET_LANG, payload: payload });
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
    var _ref = _asyncToGenerator( /*#__PURE__*/regenerator__default.a.mark(function _callee(dispatch) {
      var response, payload;
      return regenerator__default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return external__axios__default.a.get('/static/lang/' + lang + '.json');

            case 3:
              response = _context.sent;
              payload = {
                lang: lang,
                translations: response.data
              };


              dispatch({ type: SET_LANG, payload: payload });
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
  return { type: TOGGLE_MENU, payload: menuOpen };
}
// EXTERNAL MODULE: external "redux-thunk"
var external__redux_thunk_ = __webpack_require__(14);
var external__redux_thunk__default = /*#__PURE__*/__webpack_require__.n(external__redux_thunk_);

// CONCATENATED MODULE: ./common/reducer.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



var reducer_initialState = {
  avaliableLang: ['is', 'en'],
  lang: 'is',
  translations: null,
  menuOpen: false
};

/* harmony default export */ var reducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : reducer_initialState;
  var action = arguments[1];

  switch (action.type) {
    case SET_LANG:
      return _extends({}, state, {
        lang: action.payload.lang,
        translations: action.payload.translations
      });

    case TOGGLE_MENU:
      return _extends({}, state, {
        menuOpen: action.payload
      });

    default:
      return _extends({}, state);
  }
});
// CONCATENATED MODULE: ./common/rootReducer.js



var rootReducer = Object(external__redux_["combineReducers"])({
  common: reducer
});

/* harmony default export */ var common_rootReducer = (rootReducer);
// CONCATENATED MODULE: ./common/store.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };





function configureStore(initialState) {
  var store = Object(external__redux_["createStore"])(common_rootReducer, initialState, Object(external__redux_["compose"])(Object(external__redux_["applyMiddleware"])(external__redux_thunk__default.a), (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : function (f) {
    return f;
  }));

  return store;
}
// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(15);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(1);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// EXTERNAL MODULE: external "classnames"
var external__classnames_ = __webpack_require__(3);
var external__classnames__default = /*#__PURE__*/__webpack_require__.n(external__classnames_);

// EXTERNAL MODULE: external "animejs"
var external__animejs_ = __webpack_require__(4);
var external__animejs__default = /*#__PURE__*/__webpack_require__.n(external__animejs_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(6);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "react-responsive"
var external__react_responsive_ = __webpack_require__(7);
var external__react_responsive__default = /*#__PURE__*/__webpack_require__.n(external__react_responsive_);

// EXTERNAL MODULE: ./components/navigation/navigation.css
var navigation = __webpack_require__(16);
var navigation_default = /*#__PURE__*/__webpack_require__.n(navigation);

// CONCATENATED MODULE: ./components/navigation/navigation.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var navigation_Navigation = function (_Component) {
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

        external__animejs__default()({
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
          return external__react__default.a.createElement(
            'a',
            { className: 'navbar-item', key: item, onClick: function onClick() {
                return _this2.changeLang(item);
              } },
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


      return external__react__default.a.createElement(
        'nav',
        { className: navigation_default.a.navbarBackground },
        external__react__default.a.createElement(
          'div',
          { className: external__classnames__default()(navigation_default.a.shadow, 'navbar is-fixed-top'), ref: function ref(r) {
              return _this3.navbar = r;
            } },
          external__react__default.a.createElement(
            'div',
            { className: 'container' },
            external__react__default.a.createElement(
              'div',
              { className: 'navbar-brand' },
              external__react__default.a.createElement(
                'a',
                { className: external__classnames__default()(navigation_default.a.navbarBrand, 'navbar-item', 'title is-4') },
                external__react__default.a.createElement('img', { src: '/static/img/logo.svg', alt: 'Straumverk', className: navigation_default.a.logo }),
                ' STRAUMVERK'
              ),
              external__react__default.a.createElement(
                external__react_responsive__default.a,
                { query: '(max-width: 1023px)' },
                external__react__default.a.createElement(
                  'div',
                  { className: navigation_default.a.mobileItemContainer },
                  external__react__default.a.createElement(
                    'a',
                    { className: 'navbar-item', 'data-id': 1 },
                    t.operations
                  ),
                  external__react__default.a.createElement(
                    'a',
                    { className: 'navbar-item', 'data-id': 2 },
                    t.aboutus
                  ),
                  external__react__default.a.createElement(
                    'a',
                    { className: 'navbar-item', 'data-id': 3 },
                    t.contact
                  )
                )
              )
            ),
            external__react__default.a.createElement(
              'div',
              { className: 'navbar-menu' },
              external__react__default.a.createElement(
                'div',
                { className: 'navbar-end', onClick: this.clickHandler },
                external__react__default.a.createElement(
                  'a',
                  { className: 'navbar-item', 'data-id': 1 },
                  t.operations
                ),
                external__react__default.a.createElement(
                  'a',
                  { className: 'navbar-item', 'data-id': 2 },
                  t.aboutus
                ),
                external__react__default.a.createElement(
                  'a',
                  { className: 'navbar-item', 'data-id': 3 },
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
}(external__react_["Component"]);

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
    actions: Object(external__redux_["bindActionCreators"])({ getTranslations: getTranslations, toggleMenu: toggleMenu }, dispatch)
  };
}

/* harmony default export */ var navigation_navigation = (Object(external__react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(navigation_Navigation));
// CONCATENATED MODULE: ./components/navigation/index.js

// EXTERNAL MODULE: ./components/button/button.css
var button_button = __webpack_require__(17);
var button_default = /*#__PURE__*/__webpack_require__.n(button_button);

// CONCATENATED MODULE: ./components/button/button.js
var button__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function button__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function button__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function button__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var button_Button = function (_Component) {
  button__inherits(Button, _Component);

  function Button() {
    button__classCallCheck(this, Button);

    return button__possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  button__createClass(Button, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return external__react__default.a.createElement(
        'button',
        { className: button_default.a.button },
        children
      );
    }
  }]);

  return Button;
}(external__react_["Component"]);

/* harmony default export */ var components_button_button = (button_Button);
// CONCATENATED MODULE: ./components/button/index.js

// EXTERNAL MODULE: ./components/slider/slider.css
var slider = __webpack_require__(18);
var slider_default = /*#__PURE__*/__webpack_require__.n(slider);

// CONCATENATED MODULE: ./components/slider/slider.js
var slider__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function slider__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function slider__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function slider__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








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

var slider_Slider = function (_Component) {
  slider__inherits(Slider, _Component);

  function Slider(props) {
    slider__classCallCheck(this, Slider);

    var _this2 = slider__possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

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

  slider__createClass(Slider, [{
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
      svg.setAttribute('class', slider_default.a.svgFrame);
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

      var animateShapeIn = external__animejs__default()({
        targets: shape,
        duration: animation.shape.duration,
        easing: animation.shape.easing.in,
        d: paths.final
      });

      var animateSlides = function animateSlides() {
        return new Promise(function (resolve, reject) {
          var currentSlide = slides.children[current];
          var slidesTotal = slides.children.length;

          external__animejs__default()({
            targets: currentSlide,
            duration: animation.slides.duration,
            easing: animation.slides.easing,
            translateX: dir === 'next' ? -1 * width : width,
            complete: function complete() {
              currentSlide.classList.remove(slider_default.a.current);
              resolve();
            }
          });

          current = dir === 'next' ? current < slidesTotal - 1 ? current + 1 : 0 : current > 0 ? current - 1 : slidesTotal - 1;

          var newSlide = slides.children[current];
          newSlide.classList.add(slider_default.a.current);

          external__animejs__default()({
            targets: newSlide,
            duration: animation.slides.duration,
            easing: animation.slides.easing,
            translateX: [dir === 'next' ? width : -1 * width, 0]
          });

          var newSlideImg = newSlide;
          external__animejs__default.a.remove(newSlideImg);

          external__animejs__default()({
            targets: newSlideImg,
            duration: animation.slides.duration,
            easing: animation.slides.easing,
            translateX: [dir === 'next' ? 200 : -200, 0]
          });

          var targets = [];
          for (var i = 0; i < newSlide.children.length; i++) {
            targets.push(newSlide.children[i]);
          }

          external__animejs__default()({
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
        external__animejs__default()({
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


        return external__react__default.a.createElement(
          'div',
          { key: i, className: external__classnames__default()(slider_default.a.slide, current === i ? slider_default.a.current : '') },
          external__react__default.a.createElement(
            'div',
            { className: slider_default.a.img, style: { backgroundImage: 'url(' + image + ')' } },
            external__react__default.a.createElement('div', { className: slider_default.a.overlay })
          ),
          external__react__default.a.createElement(
            'h2',
            { className: slider_default.a.title },
            title
          ),
          external__react__default.a.createElement('p', {
            className: slider_default.a.desc,
            dangerouslySetInnerHTML: {
              __html: desc
            }
          }),
          link ? external__react__default.a.createElement(
            components_button_button,
            null,
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


      return external__react__default.a.createElement(
        'div',
        { className: slider_default.a.slideshow, ref: function ref(r) {
            return _this5.slideshow = r;
          } },
        external__react__default.a.createElement(
          'div',
          { className: slider_default.a.slides, ref: function ref(r) {
              return _this5.slides = r;
            } },
          this.renderSlides()
        ),
        external__react__default.a.createElement(
          'nav',
          { className: slider_default.a.slidenav, ref: function ref(r) {
              return _this5.slidenav = r;
            } },
          external__react__default.a.createElement(
            'button',
            { className: external__classnames__default()(slider_default.a.item, slider_default.a.prev), onClick: function onClick() {
                return _this5.prevSlide();
              } },
            t.prev
          ),
          external__react__default.a.createElement(
            'span',
            null,
            '/'
          ),
          external__react__default.a.createElement(
            'button',
            { className: external__classnames__default()(slider_default.a.item, slider_default.a.next), onClick: function onClick() {
                return _this5.nextSlide();
              } },
            t.next
          )
        )
      );
    }
  }]);

  return Slider;
}(external__react_["Component"]);

/* harmony default export */ var slider_slider = (slider_Slider);
// CONCATENATED MODULE: ./components/slider/index.js

// EXTERNAL MODULE: ./components/menu/menu.css
var menu = __webpack_require__(19);
var menu_default = /*#__PURE__*/__webpack_require__.n(menu);

// CONCATENATED MODULE: ./components/menu/menu.js
var menu__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function menu__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function menu__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function menu__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






// Styles


var menu_Menu = function (_Component) {
  menu__inherits(Menu, _Component);

  function Menu() {
    menu__classCallCheck(this, Menu);

    return menu__possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
  }

  menu__createClass(Menu, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.open) {
        this.animateNavLinks();
      }
    }
  }, {
    key: 'animateNavLinks',
    value: function animateNavLinks() {
      var tl = external__animejs__default.a.timeline({
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


      return external__react__default.a.createElement(
        'div',
        { className: external__classnames__default()(menu_default.a.container, open ? menu_default.a.open : '') },
        external__react__default.a.createElement(
          'div',
          { className: menu_default.a.dropdown },
          external__react__default.a.createElement(
            'ul',
            { ref: function ref(c) {
                return _this2.ul = c;
              } },
            external__react__default.a.createElement(
              'li',
              null,
              external__react__default.a.createElement(
                'a',
                null,
                t.aboutUs
              )
            ),
            external__react__default.a.createElement(
              'li',
              null,
              external__react__default.a.createElement(
                'a',
                null,
                t.specialField
              )
            ),
            external__react__default.a.createElement(
              'li',
              null,
              external__react__default.a.createElement(
                'a',
                null,
                t.projects
              )
            ),
            external__react__default.a.createElement(
              'li',
              null,
              external__react__default.a.createElement(
                'a',
                null,
                t.partners
              )
            ),
            external__react__default.a.createElement(
              'li',
              null,
              external__react__default.a.createElement(
                'a',
                null,
                t.employees
              )
            )
          )
        )
      );
    }
  }]);

  return Menu;
}(external__react_["Component"]);

/* harmony default export */ var menu_menu = (menu_Menu);
// CONCATENATED MODULE: ./components/menu/index.js

// EXTERNAL MODULE: external "react-waypoint"
var external__react_waypoint_ = __webpack_require__(20);
var external__react_waypoint__default = /*#__PURE__*/__webpack_require__.n(external__react_waypoint_);

// EXTERNAL MODULE: external "shortid"
var external__shortid_ = __webpack_require__(21);
var external__shortid__default = /*#__PURE__*/__webpack_require__.n(external__shortid_);

// EXTERNAL MODULE: ./components/section/section.css
var section_section = __webpack_require__(22);
var section_default = /*#__PURE__*/__webpack_require__.n(section_section);

// CONCATENATED MODULE: ./components/section/section.js
var section__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function section__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function section__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function section__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var section_Section = function (_Component) {
  section__inherits(Section, _Component);

  function Section(props) {
    section__classCallCheck(this, Section);

    var _this = section__possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).call(this, props));

    _this.onEnter = _this.onEnter.bind(_this);
    _this.tl = null;
    _this.hasAnimated = false;
    return _this;
  }

  section__createClass(Section, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.tl = external__animejs__default.a.timeline();
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


      return external__react__default.a.createElement(
        'div',
        {
          className: external__classnames__default()('section-' + id, section_default.a.contentContainer),
          key: external__shortid__default.a.generate(),
          ref: function ref(r) {
            return _this2.content = r;
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


      return external__react__default.a.createElement(
        'div',
        {
          key: external__shortid__default.a.generate(),
          ref: function ref(r) {
            return _this3.imgContainer = r;
          },
          className: external__classnames__default()(this.props.switch ? section_default.a.imgContainerLeft : section_default.a.imgContainer, section_default.a.imgDefaultContainers)
        },
        external__react__default.a.createElement('img', { src: img, alt: title })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          img = _props3.img,
          title = _props3.title,
          id = _props3.id;

      return external__react__default.a.createElement(
        'section',
        { className: external__classnames__default()('section-' + id, this.props.switch ? section_default.a.odd : '') },
        external__react__default.a.createElement(
          external__react_waypoint__default.a,
          { onEnter: this.onEnter, bottomOffset: '100px' },
          external__react__default.a.createElement(
            'div',
            { className: external__classnames__default()(section_default.a.container, 'container') },
            external__react__default.a.createElement(
              external__react_responsive__default.a,
              { query: '(max-width: 1023px)' },
              [this.renderText(), this.renderImage()]
            ),
            external__react__default.a.createElement(
              external__react_responsive__default.a,
              { query: '(min-width: 1024px)' },
              this.props.switch ? [this.renderImage(), this.renderText()] : [this.renderText(), this.renderImage()]
            )
          )
        )
      );
    }
  }]);

  return Section;
}(external__react_["Component"]);

/* harmony default export */ var components_section_section = (section_Section);
// CONCATENATED MODULE: ./components/section/index.js

// EXTERNAL MODULE: ./components/footer/footer.css
var footer = __webpack_require__(23);
var footer_default = /*#__PURE__*/__webpack_require__.n(footer);

// CONCATENATED MODULE: ./components/footer/footer.js
var footer__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function footer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function footer__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function footer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var footer_Footer = function (_Component) {
  footer__inherits(Footer, _Component);

  function Footer() {
    footer__classCallCheck(this, Footer);

    return footer__possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  footer__createClass(Footer, [{
    key: 'render',
    value: function render() {
      var t = this.props.t;


      return external__react__default.a.createElement(
        'footer',
        { className: footer_default.a.container },
        external__react__default.a.createElement(
          'div',
          { className: 'container' },
          external__react__default.a.createElement(
            'div',
            { className: 'content has-text-centered' },
            external__react__default.a.createElement(
              'p',
              null,
              external__react__default.a.createElement(
                'strong',
                null,
                'Straumverk ehf.'
              ),
              ' \xB7 Netfang:',
              ' ',
              external__react__default.a.createElement(
                'a',
                { href: 'mailto:straumverk@straumverk.is' },
                'straumverk@straumverk.is'
              ),
              ' \xB7 Kt.640517-0500 \xB7 Vsk.129428 \xB7 S\xEDmi: ',
              external__react__default.a.createElement(
                'a',
                { href: 'tel:+3548884070' },
                '888-4070'
              )
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(external__react_["Component"]);

/* harmony default export */ var footer_footer = (footer_Footer);
// CONCATENATED MODULE: ./components/footer/index.js

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external__isomorphic_unfetch_ = __webpack_require__(24);
var external__isomorphic_unfetch__default = /*#__PURE__*/__webpack_require__.n(external__isomorphic_unfetch_);

// CONCATENATED MODULE: ./pages/index.js


var pages__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function pages__asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function pages__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function pages__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
















var pages_Index = function (_Component) {
  pages__inherits(Index, _Component);

  function Index() {
    pages__classCallCheck(this, Index);

    return pages__possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  pages__createClass(Index, [{
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

      return external__react__default.a.createElement(
        'div',
        {
          className: 'jsx-1072911852'
        },
        external__react__default.a.createElement(
          head__default.a,
          null,
          external__react__default.a.createElement(
            'title',
            {
              className: 'jsx-1072911852'
            },
            'Straumverk'
          ),
          external__react__default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', className: 'jsx-1072911852'
          }),
          external__react__default.a.createElement('link', { rel: 'stylesheet', href: '/static/css/bulma.min.css', className: 'jsx-1072911852'
          }),
          external__react__default.a.createElement('link', { rel: 'stylesheet', href: '/static/css/base.css', className: 'jsx-1072911852'
          }),
           true ? external__react__default.a.createElement('link', { rel: 'stylesheet', href: '/_next/static/style.css', className: 'jsx-1072911852'
          }) : React.createElement('link', { rel: 'stylesheet', href: '/static/css/style.css', className: 'jsx-1072911852'
          })
        ),
        external__react__default.a.createElement(
          'main',
          {
            className: 'jsx-1072911852'
          },
          external__react__default.a.createElement(navigation_navigation, { t: t, lang: lang }),
          external__react__default.a.createElement(menu_menu, { open: menuOpen, t: t }),
          external__react__default.a.createElement(slider_slider, { slides: slides, t: t }),
          external__react__default.a.createElement(
            components_section_section,
            { img: '/static/img/electric3.jpg', id: 1, 'switch': true },
            external__react__default.a.createElement(
              'h2',
              {
                className: 'jsx-1072911852'
              },
              t.operations
            ),
            external__react__default.a.createElement(
              'p',
              {
                className: 'jsx-1072911852'
              },
              t.operationsDesc
            )
          ),
          external__react__default.a.createElement(
            components_section_section,
            { img: '/static/img/electric1.jpg', id: 2 },
            external__react__default.a.createElement(
              'h2',
              {
                className: 'jsx-1072911852'
              },
              t.aboutus
            ),
            external__react__default.a.createElement(
              'p',
              {
                className: 'jsx-1072911852'
              },
              t.aboutusDesc
            )
          ),
          external__react__default.a.createElement(
            components_section_section,
            { img: '/static/img/electric2.jpg', id: 3, 'switch': true },
            external__react__default.a.createElement(
              'h2',
              {
                className: 'jsx-1072911852'
              },
              t.contact
            ),
            external__react__default.a.createElement('p', {
              dangerouslySetInnerHTML: {
                __html: t.contactDesc
              },
              className: 'jsx-1072911852'
            }),
            external__react__default.a.createElement(
              'div',
              {
                className: 'jsx-1072911852' + ' ' + 'has-text-centered'
              },
              external__react__default.a.createElement(
                'a',
                { href: 'mailto:straumverk@straumverk.is', className: 'jsx-1072911852'
                },
                external__react__default.a.createElement(
                  components_button_button,
                  null,
                  t.contact
                )
              )
            )
          ),
          external__react__default.a.createElement(footer_footer, { t: t })
        ),
        external__react__default.a.createElement(style__default.a, {
          styleId: '1072911852',
          css: ['body{padding-top:3.25rem;}']
        })
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = pages__asyncToGenerator( /*#__PURE__*/regenerator__default.a.mark(function _callee(_ref) {
        var req = _ref.req,
            store = _ref.store;
        var lang, res, json, payload;
        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                lang = req.cookies && req.cookies.lang ? req.cookies.lang : 'is';
                _context.next = 3;
                return fetch("http://138.68.191.12:8000" + '/static/lang/' + lang + '.json');

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


                store.dispatch({ type: SET_LANG, payload: payload });
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
}(external__react_["Component"]);

/**
 * Maps redux state to props
 *
 * @param {Object} state
 */


function pages_mapStateToProps(state) {
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
function pages_mapDispatchToProps(dispatch) {
  return {
    setTranslations: Object(external__redux_["bindActionCreators"])(setTranslations, dispatch)
  };
}

/* harmony default export */ var pages = __webpack_exports__["default"] = (external__next_redux_wrapper__default()(configureStore, pages_mapStateToProps, pages_mapDispatchToProps)(pages_Index));

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 16 */
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
/* 17 */
/***/ (function(module, exports) {

module.exports = {
	"button": "_7lCAZ3L8bd8-DLnlo_N6u"
};

/***/ }),
/* 18 */
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
/* 19 */
/***/ (function(module, exports) {

module.exports = {
	"container": "_3gaHK69gNcc-UPrlB3V_29",
	"open": "_3fSFQBiayPDugr0-dBRL3F",
	"dropdown": "_1zNxHTZcC_Ed7qGzl4h4BA",
	"active": "rB7o2U1kUzFmsV0dtICiv"
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-waypoint");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = {
	"container": "_1Z5oshflTfpw5zMbBL0Dfr",
	"odd": "C1T1uxQcE9pt19x-ss3r-",
	"contentContainer": "DX1yhGKowsH2fgmHY_uZi",
	"imgDefaultContainers": "_37FObub0x0KYZK3CkOeYQm"
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = {
	"container": "_1uYiT3lVTswiNlYVkzx3mm"
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ })
/******/ ]);