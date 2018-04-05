webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux__ = __webpack_require__("./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_redux_wrapper__ = __webpack_require__("./node_modules/next-redux-wrapper/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_redux_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_redux_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_favicons__ = __webpack_require__("./components/favicons/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_actions__ = __webpack_require__("./common/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_types__ = __webpack_require__("./common/types.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_store__ = __webpack_require__("./common/store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navigation__ = __webpack_require__("./components/navigation/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_slider__ = __webpack_require__("./components/slider/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_menu__ = __webpack_require__("./components/menu/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_section__ = __webpack_require__("./components/section/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_button__ = __webpack_require__("./components/button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_footer__ = __webpack_require__("./components/footer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_isomorphic_unfetch__);

var _jsxFileName = '/Users/snaerthoroddsson/Projects/straumverk_new/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

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
        image: '/static/img/electric6.jpg',
        title: 'Straumverk',
        desc: 'Traustir rafverktakar'
      }, {
        image: '/static/img/electric4.jpg',
        title: t.operations,
        desc: t.specialFieldShortDesc
      }, {
        image: '/static/img/electric12.jpg',
        title: t.contact,
        desc: t.contactDesc
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
            'Straumverk'
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_favicons__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            }
          }),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('meta', {
            name: 'description',
            content: 'Straumverk ehf. - Rafvirkjar sem sj\xE1um uppsetningu e\xF0a vi\xF0hald \xE1 almennar raflagnir, N\xFDlagnir, T\xF6flusm\xED\xF0i, S\xEDmalagnir og Netlagnir',
            className: 'jsx-1072911852',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            }
          }),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', className: 'jsx-1072911852',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          }),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('link', { rel: 'stylesheet', href: '/static/css/bulma.min.css', className: 'jsx-1072911852',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            }
          }),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('link', { rel: 'stylesheet', href: '/static/css/base.css', className: 'jsx-1072911852',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            }
          }),
           false ? React.createElement('link', { rel: 'stylesheet', href: '/_next/static/style.css', className: 'jsx-1072911852',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            }
          }) : __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('link', { rel: 'stylesheet', href: '/static/css/style.css', className: 'jsx-1072911852',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'main',
          {
            className: 'jsx-1072911852',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_navigation__["a" /* default */], { t: t, lang: lang, __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            }
          }),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_menu__["a" /* default */], { open: menuOpen, t: t, __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            }
          }),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_slider__["a" /* default */], { slides: slides, t: t, __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            }
          }),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_13__components_section__["a" /* default */],
            { img: '/static/img/electric9.jpg', id: 1, 'switch': true, __source: {
                fileName: _jsxFileName,
                lineNumber: 75
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'h2',
              {
                className: 'jsx-1072911852',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 76
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
                  lineNumber: 77
                }
              },
              t.operationsDesc
            )
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_13__components_section__["a" /* default */],
            { img: '/static/img/electric10.jpg', id: 2, __source: {
                fileName: _jsxFileName,
                lineNumber: 79
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'h2',
              {
                className: 'jsx-1072911852',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 80
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
                  lineNumber: 81
                }
              },
              t.aboutusDesc
            )
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_13__components_section__["a" /* default */],
            { img: '/static/img/electric8.jpg', id: 3, 'switch': true, __source: {
                fileName: _jsxFileName,
                lineNumber: 83
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'h2',
              {
                className: 'jsx-1072911852',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 84
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
                lineNumber: 85
              }
            }),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'div',
              {
                className: 'jsx-1072911852' + ' ' + 'has-text-centered',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 90
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'a',
                { href: 'mailto:straumverk@straumverk.is', className: 'jsx-1072911852',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_14__components_button__["a" /* default */],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 92
                    }
                  },
                  t.contact
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__components_footer__["a" /* default */], { t: t, __source: {
              fileName: _jsxFileName,
              lineNumber: 96
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
          styleId: '1072911852',
          css: 'body{padding-top:3.25rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlHMkIsQUFHaUMsb0JBQ3RCIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zbmFlcnRob3JvZGRzc29uL1Byb2plY3RzL3N0cmF1bXZlcmtfbmV3Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5pbXBvcnQgRmF2aWNvbnMgZnJvbSAnLi4vY29tcG9uZW50cy9mYXZpY29ucyc7XG5pbXBvcnQgeyBzZXRUcmFuc2xhdGlvbnMgfSBmcm9tICcuLi9jb21tb24vYWN0aW9ucyc7XG5pbXBvcnQgeyBTRVRfTEFORyB9IGZyb20gJy4uL2NvbW1vbi90eXBlcyc7XG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi4vY29tbW9uL3N0b3JlJztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2aWdhdGlvbic7XG5pbXBvcnQgU2xpZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvc2xpZGVyJztcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvbWVudSc7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb24nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJztcbmltcG9ydCAnaXNvbW9ycGhpYy11bmZldGNoJztcblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxLCBzdG9yZSB9KSB7XG4gICAgY29uc3QgbGFuZyA9IHJlcS5jb29raWVzICYmIHJlcS5jb29raWVzLmxhbmcgPyByZXEuY29va2llcy5sYW5nIDogJ2lzJztcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5MT0NBTF9VUkx9L3N0YXRpYy9sYW5nLyR7bGFuZ30uanNvbmApO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICBsYW5nLFxuICAgICAgdHJhbnNsYXRpb25zOiBqc29uLFxuICAgIH07XG5cbiAgICBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6IFNFVF9MQU5HLCBwYXlsb2FkIH0pO1xuICAgIHJldHVybiB7IHQ6IGpzb24sIGxhbmcgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHQsIGxhbmcsIG1lbnVPcGVuIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3Qgc2xpZGVzID0gW1xuICAgICAge1xuICAgICAgICBpbWFnZTogJy9zdGF0aWMvaW1nL2VsZWN0cmljNi5qcGcnLFxuICAgICAgICB0aXRsZTogJ1N0cmF1bXZlcmsnLFxuICAgICAgICBkZXNjOiAnVHJhdXN0aXIgcmFmdmVya3Rha2FyJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGltYWdlOiAnL3N0YXRpYy9pbWcvZWxlY3RyaWM0LmpwZycsXG4gICAgICAgIHRpdGxlOiB0Lm9wZXJhdGlvbnMsXG4gICAgICAgIGRlc2M6IHQuc3BlY2lhbEZpZWxkU2hvcnREZXNjLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaW1hZ2U6ICcvc3RhdGljL2ltZy9lbGVjdHJpYzEyLmpwZycsXG4gICAgICAgIHRpdGxlOiB0LmNvbnRhY3QsXG4gICAgICAgIGRlc2M6IHQuY29udGFjdERlc2MsXG4gICAgICB9LFxuICAgIF07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPlN0cmF1bXZlcms8L3RpdGxlPlxuICAgICAgICAgIDxGYXZpY29ucyAvPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgY29udGVudD1cIlN0cmF1bXZlcmsgZWhmLiAtIFJhZnZpcmtqYXIgc2VtIHNqw6F1bSB1cHBzZXRuaW5ndSBlw7BhIHZpw7BoYWxkIMOhIGFsbWVubmFyIHJhZmxhZ25pciwgTsO9bGFnbmlyLCBUw7ZmbHVzbcOtw7BpLCBTw61tYWxhZ25pciBvZyBOZXRsYWduaXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0YXRpYy9jc3MvYnVsbWEubWluLmNzc1wiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3RhdGljL2Nzcy9iYXNlLmNzc1wiIC8+XG4gICAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyAoXG4gICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9fbmV4dC9zdGF0aWMvc3R5bGUuY3NzXCIgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3RhdGljL2Nzcy9zdHlsZS5jc3NcIiAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgPE5hdmlnYXRpb24gdD17dH0gbGFuZz17bGFuZ30gLz5cbiAgICAgICAgICA8TWVudSBvcGVuPXttZW51T3Blbn0gdD17dH0gLz5cbiAgICAgICAgICA8U2xpZGVyIHNsaWRlcz17c2xpZGVzfSB0PXt0fSAvPlxuXG4gICAgICAgICAgPFNlY3Rpb24gaW1nPVwiL3N0YXRpYy9pbWcvZWxlY3RyaWM5LmpwZ1wiIGlkPXsxfSBzd2l0Y2g+XG4gICAgICAgICAgICA8aDI+e3Qub3BlcmF0aW9uc308L2gyPlxuICAgICAgICAgICAgPHA+e3Qub3BlcmF0aW9uc0Rlc2N9PC9wPlxuICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgICA8U2VjdGlvbiBpbWc9XCIvc3RhdGljL2ltZy9lbGVjdHJpYzEwLmpwZ1wiIGlkPXsyfT5cbiAgICAgICAgICAgIDxoMj57dC5hYm91dHVzfTwvaDI+XG4gICAgICAgICAgICA8cD57dC5hYm91dHVzRGVzY308L3A+XG4gICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgIDxTZWN0aW9uIGltZz1cIi9zdGF0aWMvaW1nL2VsZWN0cmljOC5qcGdcIiBpZD17M30gc3dpdGNoPlxuICAgICAgICAgICAgPGgyPnt0LmNvbnRhY3R9PC9oMj5cbiAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiB0LmNvbnRhY3REZXNjLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpzdHJhdW12ZXJrQHN0cmF1bXZlcmsuaXNcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uPnt0LmNvbnRhY3R9PC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgICA8Rm9vdGVyIHQ9e3R9IC8+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzLjI1cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIE1hcHMgcmVkdXggc3RhdGUgdG8gcHJvcHNcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGVcbiAqL1xuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gIGNvbnN0IHsgdHJhbnNsYXRpb25zLCBsYW5nLCBtZW51T3BlbiB9ID0gc3RhdGUuY29tbW9uO1xuICByZXR1cm4ge1xuICAgIHQ6IHRyYW5zbGF0aW9ucyxcbiAgICBsYW5nLFxuICAgIG1lbnVPcGVuLFxuICB9O1xufVxuXG4vKipcbiAqIE1hcHMgZGlzcGF0Y2ggdG8gcHJvcHNcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGVcbiAqL1xuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gIHJldHVybiB7XG4gICAgc2V0VHJhbnNsYXRpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoc2V0VHJhbnNsYXRpb25zLCBkaXNwYXRjaCksXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChjb25maWd1cmVTdG9yZSwgbWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEluZGV4KTtcbiJdfQ== */\n/*@ sourceURL=pages/index.js */'
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
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
                return fetch("http://localhost:8000" + '/static/lang/' + lang + '.json');

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


                store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_8__common_types__["a" /* SET_LANG */], payload: payload });
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
    setTranslations: Object(__WEBPACK_IMPORTED_MODULE_4_redux__["b" /* bindActionCreators */])(__WEBPACK_IMPORTED_MODULE_7__common_actions__["b" /* setTranslations */], dispatch)
  };
}

var _default = __WEBPACK_IMPORTED_MODULE_5_next_redux_wrapper___default()(__WEBPACK_IMPORTED_MODULE_9__common_store__["a" /* default */], mapStateToProps, mapDispatchToProps)(Index);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Index, 'Index', '/Users/snaerthoroddsson/Projects/straumverk_new/pages/index.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/snaerthoroddsson/Projects/straumverk_new/pages/index.js');
  reactHotLoader.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/snaerthoroddsson/Projects/straumverk_new/pages/index.js');
  reactHotLoader.register(_default, 'default', '/Users/snaerthoroddsson/Projects/straumverk_new/pages/index.js');
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.83f44b0221eac056fec8.hot-update.js.map