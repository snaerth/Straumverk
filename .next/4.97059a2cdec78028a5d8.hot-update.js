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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__button__ = __webpack_require__("./components/button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__slider_css__ = __webpack_require__("./components/slider/slider.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__slider_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__slider_css__);
var _jsxFileName = '/Users/snaerthoroddsson/Projects/straumverk_new/components/slider/slider.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

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
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Slider;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Slider.propTypes = {
  slides: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
  t: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

var _default = Slider;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(debounce, 'debounce', '/Users/snaerthoroddsson/Projects/straumverk_new/components/slider/slider.js');
  reactHotLoader.register(Slider, 'Slider', '/Users/snaerthoroddsson/Projects/straumverk_new/components/slider/slider.js');
  reactHotLoader.register(_default, 'default', '/Users/snaerthoroddsson/Projects/straumverk_new/components/slider/slider.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.97059a2cdec78028a5d8.hot-update.js.map