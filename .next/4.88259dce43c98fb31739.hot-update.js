webpackHotUpdate(4,{

/***/ "./components/slider/slider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_animejs__ = __webpack_require__("./node_modules/animejs/anime.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_animejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_animejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__slider_css__ = __webpack_require__("./components/slider/slider.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__slider_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__slider_css__);
var _jsxFileName = '/Users/snaerthoroddsson/Projects/new_nordic/components/slider/slider.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var SLIDES = [{
  image: '/static/img/25.jpg',
  title: 'Colossal',
  desc: 'A matter of delicate proportions and aesthetics.',
  link: 'Explore our works'
}, {
  image: '/static/img/28.jpg',
  title: 'Colossal',
  desc: 'A matter of delicate proportions and aesthetics.',
  link: 'Explore our works'
}];

var Slider = function (_Component) {
  _inherits(Slider, _Component);

  function Slider(props) {
    _classCallCheck(this, Slider);

    var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

    _this.state = {
      animation: {
        slides: {
          duration: 600,
          easing: 'easeOutQuint'
        }
      },
      current: 0
    };

    _this.nextSlide = _this.nextSlide.bind(_this);
    _this.prevSlide = _this.prevSlide.bind(_this);
    return _this;
  }

  _createClass(Slider, [{
    key: 'nextSlide',
    value: function nextSlide() {
      this.animateSlides('next');
    }
  }, {
    key: 'prevSlide',
    value: function prevSlide() {
      this.animateSlides('prev');
    }

    /**
     * Animages slides
     *
     * @param {String} dir - Direction next or prev
     */

  }, {
    key: 'animateSlides',
    value: function animateSlides(dir) {
      var slides = this.slides.children;
      var slideShow = this.slideshow;
      var animation = this.state.animation;
      var current = this.state.current;


      var currentSlide = slides[current];
      var slidesTotal = slides.length;

      var _slideShow$getBoundin = slideShow.getBoundingClientRect(),
          width = _slideShow$getBoundin.width;

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

      var newSlide = slides[current];
      newSlide.classList.add(__WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.current);

      __WEBPACK_IMPORTED_MODULE_3_animejs___default()({
        targets: newSlide,
        duration: animation.slides.duration,
        easing: animation.slides.easing,
        translateX: [dir === 'next' ? width : -1 * width, 0]
      });

      // const newSlideImg = newSlide.querySelector('.slide__img');
      // anime.remove(newSlideImg);
      // anime({
      //   targets: newSlideImg,
      //   duration: animation.slides.duration * 4,
      //   easing: animation.slides.easing,
      //   translateX: [dir === 'next' ? 200 : -200, 0],
      // });

      // anime({
      //   targets: [
      //     newSlide.querySelector('.slide__title'),
      //     newSlide.querySelector('.slide__desc'),
      //     newSlide.querySelector('.slide__link'),
      //   ],
      //   duration: animation.slides.duration * 2,
      //   easing: animation.slides.easing,
      //   delay: (t, i) => i * 100 + 100,
      //   translateX: [dir === 'next' ? 300 : -300, 0],
      //   opacity: [0, 1],
      // });
    }
  }, {
    key: 'renderSlides',
    value: function renderSlides() {
      return SLIDES.map(function (slide) {
        var image = slide.image,
            title = slide.title,
            desc = slide.desc,
            link = slide.link;


        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.slide, __WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.current), __source: {
              fileName: _jsxFileName,
              lineNumber: 116
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.img, style: { backgroundImage: 'url(' + image + ')' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 117
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            { className: __WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.title, __source: {
                fileName: _jsxFileName,
                lineNumber: 118
              }
            },
            title
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            { className: __WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.desc, __source: {
                fileName: _jsxFileName,
                lineNumber: 119
              }
            },
            desc
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { className: __WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.link, href: '#', __source: {
                fileName: _jsxFileName,
                lineNumber: 120
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
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.slideshow, ref: function ref(r) {
            return _this2.slideshow = r;
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.slides, ref: function ref(r) {
              return _this2.slides = r;
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 131
            }
          },
          this.renderSlides()
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'nav',
          { className: __WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.slidenav, __source: {
              fileName: _jsxFileName,
              lineNumber: 134
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.item, __WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.prev), onClick: function onClick() {
                return _this2.prevSlide();
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 135
              }
            },
            'Previous'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 138
              }
            },
            '/'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.item, __WEBPACK_IMPORTED_MODULE_4__slider_css___default.a.next), onClick: function onClick() {
                return _this2.nextSlide();
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 139
              }
            },
            'Next'
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

  return Slider;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Slider.propTypes = {};

var _default = Slider;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SLIDES, 'SLIDES', '/Users/snaerthoroddsson/Projects/new_nordic/components/slider/slider.js');
  reactHotLoader.register(Slider, 'Slider', '/Users/snaerthoroddsson/Projects/new_nordic/components/slider/slider.js');
  reactHotLoader.register(_default, 'default', '/Users/snaerthoroddsson/Projects/new_nordic/components/slider/slider.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.88259dce43c98fb31739.hot-update.js.map