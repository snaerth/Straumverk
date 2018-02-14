import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import anime from 'animejs';
import s from './slider.css';

const SLIDES = [
  {
    image: '/static/img/25.jpg',
    title: 'Colossal 1',
    desc: 'A matter of delicate proportions and aesthetics.',
    link: 'Explore our works',
  },
  {
    image: '/static/img/28.jpg',
    title: 'Colossal 2',
    desc: 'A matter of delicate proportions and aesthetics.',
    link: 'Explore our works',
  },
  {
    image: '/static/img/27.jpg',
    title: 'Colossal 3',
    desc: 'A matter of delicate proportions and aesthetics.',
    link: 'Explore our works',
  },
];

// From https://davidwalsh.name/javascript-debounce-function.
function debounce(func, wait, immediate) {
  let timeout;

  return () => {
    const context = this;
    const args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animation: {
        slides: {
          duration: 600,
          easing: 'easeOutQuint',
        },
        shape: {
          duration: 300,
          easing: { in: 'easeOutQuint', out: 'easeOutQuad' },
        },
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
      dir: 'next',
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.animateShapeOut = this.animateShapeOut.bind(this);
    this.animateSlides = this.animateSlides.bind(this);
  }

  componentDidMount() {
    const rect = this.slideshow.getBoundingClientRect();
    this.setState(
      {
        rect,
        slideshow: this.slideshow,
        slides: this.slides,
        frameSize: rect.width / 12,
      },
      () => {
        this.createFrame();
      }
    );

    window.addEventListener(
      'resize',
      debounce(() => {
        this.setState({ rect: this.slideshow.getBoundingClientRect() });
        this.updateFrame();
      }, 20)
    );
    document.addEventListener('keydown', this.handleKeyDown, true);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown, false);
  }

  createFrame() {
    const { rect, frameFill, slideshow } = this.state;
    const frameSize = rect.width / 12;
    const paths = {
      initial: this.calculatePath('initial'),
      final: this.calculatePath('final'),
    };
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'shape');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.setAttribute('viewbox', `0 0 ${rect.width} ${rect.height}`);
    svg.innerHTML = `<path fill="${frameFill}" d="${paths.initial}"/>`;
    slideshow.insertBefore(svg, this.slidenav);
    const shape = svg.querySelector('path');

    this.setState({ shape, svg, frameSize, paths });
  }

  updateFrame() {
    const { paths, svg, shape, isAnimating, rect } = this.state;
    paths.initial = this.calculatePath('initial');
    paths.final = this.calculatePath('final');
    svg.setAttribute('viewbox', `0 0 ${rect.width} ${rect.height}`);
    shape.setAttribute('d', isAnimating ? paths.final : paths.initial);
  }

  calculatePath(path = 'initial') {
    const { rect, frameSize } = this.state;

    return path === 'initial'
      ? `M 0,0 0,${rect.height} ${rect.width},${rect.height} ${rect.width},0 0,0 Z M 0,0 ${
          rect.width
        },0 ${rect.width},${rect.height} 0,${rect.height} Z`
      : `M 0,0 0,${rect.height} ${rect.width},${rect.height} ${
          rect.width
        },0 0,0 Z M ${frameSize},${frameSize} ${rect.width - frameSize},${frameSize} ${rect.width -
          frameSize},${rect.height - frameSize} ${frameSize},${rect.height - frameSize} Z`;
  }

  handleKeyDown(ev) {
    const keyCode = ev.keyCode || ev.which;
    if (keyCode === 37) {
      this.prevSlide();
    } else if (keyCode === 39) {
      this.nextSlide();
    }
  }

  nextSlide() {
    this.navigate('next');
  }

  prevSlide() {
    this.navigate('prev');
  }

  navigate(dir = 'next') {
    const { isAnimating, shape, animation, paths } = this.state;

    if (isAnimating) {
      return false;
    }

    this.setState({ isAnimating: true, dir }, () => {
      const animateShapeIn = anime({
        targets: shape,
        duration: animation.shape.duration,
        easing: animation.shape.easing.in,
        d: paths.final,
      });

      animateShapeIn.finished.then(this.animateSlides).then(this.animateShapeOut);
    });
  }

  animateShapeOut() {
    const { shape, paths, animation, isAnimating } = this.state;

    anime({
      targets: shape,
      duration: animation.shape.duration,
      delay: 150,
      easing: animation.shape.easing.out,
      d: paths.initial,
      complete: () => {
        this.setState({
          isAnimating: false,
        });
      },
    });
  }

  /**
   * Animages slides
   */
  animateSlides() {
    console.log('Jojo nothing happening');
    return new Promise((resolve, reject) => {
      const {
        shape,
        isAnimating,
        paths,
        slides,
        slideshow,
        animation,
        dir,
        rect: { width },
      } = this.state;
      console.log(this.state);
      let { current } = this.state;

      if (isAnimating) return false;

      const currentSlide = slides.children[current];
      const slidesTotal = slides.children.length;

      anime({
        targets: currentSlide,
        duration: animation.slides.duration,
        easing: animation.slides.easing,
        translateX: dir === 'next' ? -1 * width : width,
        complete: () => {
          currentSlide.classList.remove(s.current);
        },
      });

      current =
        dir === 'next'
          ? current < slidesTotal - 1 ? current + 1 : 0
          : current > 0 ? current - 1 : slidesTotal - 1;

      this.setState({ current, isAnimating: true });

      const newSlide = slides.children[current];
      newSlide.classList.add(s.current);

      anime({
        targets: newSlide,
        duration: animation.slides.duration,
        easing: animation.slides.easing,
        translateX: [dir === 'next' ? width : -1 * width, 0],
      });

      const newSlideImg = newSlide;
      anime.remove(newSlideImg);

      anime({
        targets: newSlideImg,
        duration: animation.slides.duration * 4,
        easing: animation.slides.easing,
        translateX: [dir === 'next' ? 200 : -200, 0],
      });

      anime({
        targets: [newSlide.children[1], newSlide.children[2], newSlide.children[3]],
        duration: animation.slides.duration * 2,
        easing: animation.slides.easing,
        delay: (t, i) => i * 100 + 100,
        translateX: [dir === 'next' ? 300 : -300, 0],
        opacity: [0, 1],
      });
    });
  }

  renderSlides() {
    const { current } = this.state;

    return SLIDES.map((slide, i) => {
      const { image, title, desc, link } = slide;

      return (
        <div key={i} className={classnames(s.slide, current === i ? s.current : '')}>
          <div className={s.img} style={{ backgroundImage: `url(${image})` }} />
          <h2 className={s.title}>{title}</h2>
          <p className={s.desc}>{desc}</p>
          <a className={s.link} href="#">
            {link}
          </a>
        </div>
      );
    });
  }

  render() {
    return (
      <div className={s.slideshow} ref={r => (this.slideshow = r)}>
        <div className={s.slides} ref={r => (this.slides = r)}>
          {this.renderSlides()}
        </div>
        <nav className={s.slidenav} ref={r => (this.slidenav = r)}>
          <button className={classnames(s.item, s.prev)} onClick={() => this.prevSlide()}>
            Previous
          </button>
          <span>/</span>
          <button className={classnames(s.item, s.next)} onClick={() => this.nextSlide()}>
            Next
          </button>
        </nav>
      </div>
    );
  }
}

Slider.propTypes = {};

export default Slider;
