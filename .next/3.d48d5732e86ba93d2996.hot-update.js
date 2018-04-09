webpackHotUpdate(3,{

/***/ "./components/section/section.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_waypoint__ = __webpack_require__("./node_modules/react-waypoint/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_shortid__ = __webpack_require__("./node_modules/shortid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_shortid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_shortid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_animejs__ = __webpack_require__("./node_modules/animejs/anime.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_animejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_animejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_responsive__ = __webpack_require__("./node_modules/react-responsive/dist/react-responsive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_responsive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_responsive__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__section_css__ = __webpack_require__("./components/section/section.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__section_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__section_css__);
var _jsxFileName = '/Users/snaerthoroddsson/Projects/straumverk_new/components/section/section.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
      if (window.innerWidth >= 768) {
        this.tl = __WEBPACK_IMPORTED_MODULE_5_animejs___default.a.timeline();
      }
    }
  }, {
    key: 'onEnter',
    value: function onEnter(_ref) {
      var currentPosition = _ref.currentPosition,
          previousPosition = _ref.previousPosition;

      if (this.hasAnimated === false && window.innerWidth >= 768) {
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
            lineNumber: 63
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
            lineNumber: 77
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: img, alt: title, __source: {
            fileName: _jsxFileName,
            lineNumber: 85
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
            lineNumber: 93
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_react_waypoint__["a" /* default */],
          { onEnter: this.onEnter, bottomOffset: '100px', __source: {
              fileName: _jsxFileName,
              lineNumber: 94
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_7__section_css___default.a.container, 'container'), __source: {
                fileName: _jsxFileName,
                lineNumber: 95
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_responsive___default.a,
              { query: '(max-width: 1023px)', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 96
                }
              },
              [this.renderText(), this.renderImage()]
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_responsive___default.a,
              { query: '(min-width: 1024px)', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 99
                }
              },
              this.props.switch ? [this.renderImage(), this.renderText()] : [this.renderText(), this.renderImage()]
            )
          )
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
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

var _default = Section;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Section, 'Section', '/Users/snaerthoroddsson/Projects/straumverk_new/components/section/section.js');
  reactHotLoader.register(_default, 'default', '/Users/snaerthoroddsson/Projects/straumverk_new/components/section/section.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.d48d5732e86ba93d2996.hot-update.js.map