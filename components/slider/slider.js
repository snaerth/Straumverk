import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import anime from 'animejs';
import s from './slider.css';

const SLIDES = [
  {
    image: '/static/img/25.jpg',
    title: 'Colossal',
    desc: 'A matter of delicate proportions and aesthetics.',
    link: 'Explore our works',
  },
  {
    image: '/static/img/28.jpg',
    title: 'Colossal',
    desc: 'A matter of delicate proportions and aesthetics.',
    link: 'Explore our works',
  },
];

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animation: {
        slides: {
          duration: 600,
          easing: 'easeOutQuint',
        },
      },
      current: 0,
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }

  nextSlide() {
    this.animateSlides('next');
  }

  prevSlide() {
    this.animateSlides('prev');
  }

  /**
   * Animages slides
   *
   * @param {String} dir - Direction next or prev
   */
  animateSlides(dir) {
    const slides = this.slides.children;
    const slideShow = this.slideshow;
    const { animation } = this.state;
    let { current } = this.state;

    const currentSlide = slides[current];
    const slidesTotal = slides.length;
    const { width } = slideShow.getBoundingClientRect();

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

    const newSlide = slides[current];
    newSlide.classList.add(s.current);

    anime({
      targets: newSlide,
      duration: animation.slides.duration,
      easing: animation.slides.easing,
      translateX: [dir === 'next' ? width : -1 * width, 0],
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

  renderSlides() {
    return SLIDES.map(slide => {
      const { image, title, desc, link } = slide;

      return (
        <div className={classnames(s.slide, s.current)}>
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
        <nav className={s.slidenav}>
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
