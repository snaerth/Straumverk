webpackHotUpdate(4,{

/***/ "./components/hero/hero.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hero_css__ = __webpack_require__("./components/hero/hero.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hero_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__hero_css__);
var _jsxFileName = '/Users/snaerthoroddsson/Projects/new_nordic/components/hero/hero.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Hero = function (_Component) {
  _inherits(Hero, _Component);

  function Hero() {
    _classCallCheck(this, Hero);

    return _possibleConstructorReturn(this, (Hero.__proto__ || Object.getPrototypeOf(Hero)).apply(this, arguments));
  }

  _createClass(Hero, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          children = _props.children,
          className = _props.className;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'section',
        {
          className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()('hero', 'is-medium', 'is-bold', __WEBPACK_IMPORTED_MODULE_3__hero_css___default.a.hero, className || __WEBPACK_IMPORTED_MODULE_3__hero_css___default.a.background),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()('hero-body', __WEBPACK_IMPORTED_MODULE_3__hero_css___default.a.backgroundImage),
            style: { backgroundImage: 'url(/static/img/movies.jpg)' },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'container', __source: {
                fileName: _jsxFileName,
                lineNumber: 18
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'columns', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 19
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'column content is-medium', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h1',
                  {
                    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()('title', 'is-1', 'max-768', __WEBPACK_IMPORTED_MODULE_3__hero_css___default.a.animated, __WEBPACK_IMPORTED_MODULE_3__hero_css___default.a.fadeInLeft, __WEBPACK_IMPORTED_MODULE_3__hero_css___default.a.colorWhite),
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 21
                    }
                  },
                  title
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p', {
                  className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()('subtitle', 'max-768', __WEBPACK_IMPORTED_MODULE_3__hero_css___default.a.animated, __WEBPACK_IMPORTED_MODULE_3__hero_css___default.a.fadeInLeft, __WEBPACK_IMPORTED_MODULE_3__hero_css___default.a.colorWhite, __WEBPACK_IMPORTED_MODULE_3__hero_css___default.a.delay),
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                  }
                })
              ),
              children ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'column content is-medium', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                  }
                },
                children
              ) : null
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

  return Hero;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Hero.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};

var _default = Hero;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Hero, 'Hero', '/Users/snaerthoroddsson/Projects/new_nordic/components/hero/hero.js');
  reactHotLoader.register(_default, 'default', '/Users/snaerthoroddsson/Projects/new_nordic/components/hero/hero.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.6e14f951bf886359bea9.hot-update.js.map