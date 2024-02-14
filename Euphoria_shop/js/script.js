"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const isMobile = window.matchMedia(
    "(pointer: coarse) and (max-width: 839.98px)"
  ).matches;

  if (isMobile) {
    const burger = document.querySelector('.burger');

    if (burger) {
      burger.addEventListener('click', toggleMenuOpen)
    }

    function toggleMenuOpen(e) {
      const target = e.target.closest('.burger');
      if (target) {
        document.body.classList.toggle('menu-open');
      }
    }
  }

  // Swiper
  const heroSlider = document.querySelector('.hero');
  if (heroSlider) {
    const heroSwiper = new Swiper(".hero", {
      // Optional parameter
      lazy: true,
      // If we need pagination
      pagination: {
        el: ".hero__pagination",
        clickable: true,
      },
      autoHeight: true,
      speed: 600,
      parallax: true,
      loop: true,
      // Navigation arrows
      navigation: {
        nextEl: ".hero__arrow--next",
        prevEl: ".hero__arrow--prev",
      },
    });
  }

  const newSlider = document.querySelector(".new__slider");

  if (newSlider) {
    const newSwiper = new Swiper(".new__slider", {
      // Optional parameter
      lazy: true,
      autoHeight: true,
      speed: 600,
      loop: true,
      spaceBetween: 38,
      slidesPerView: 4,
      // Navigation arrows
      navigation: {
        nextEl: ".new__arrow--prev",
        prevEl: ".new__arrow--next",
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1.5,
          spaceBetween: 15,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        // when window width is >= 480px
        650: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        // when window width is >= 650px
        991: {
          slidesPerView: 4,
          spaceBetween: 38,
        },
      },
    });
  }

  // const feedbackSwiper = new Swiper(".feedback__swiper", {
  //   // Optional parameter
  //   slidesPerView: 3,
  //   spaceBetween: 23,
  //   // If we need pagination
  //   pagination: {
  //     el: ".feedback__pagination",
  //     clickable: true,
  //   },
  //   breakpoints: {
  //     320: {
  //       slidesPerView: 1,
  //       spaceBetween: 20,
  //     },
  //     630: {
  //       slidesPerView: 2,
  //       spaceBetween: 10,
  //     },
  //     1024: {
  //       slidesPerView: 3,
  //       spaceBetween: 23,
  //     },
  //   },
  // });

  // Spoiler
  const spoilerFooterParent = document.querySelector('.footer__categories');

  if (spoilerFooterParent) {
    spoilerFooterParent.addEventListener('click', toggleSpoiler);
  }

  function toggleSpoiler(e) {
    const target = e.target.closest('[data-spoiler]');
    if (target) {
      target.classList.toggle('active');
      target.classList.add('disabled');
      toggleSlide(target.nextElementSibling);
      target.nextElementSibling.addEventListener('transitionend', () => {
        target.classList.remove('disabled');
      });
    }
  }

});

function toggleSlide(target) {
  // target.classList.contains('close') ? slideIn(target) : slideOut(target);
  target.classList.toggle('open');
}

function slideIn(target) {
  target.classList.remove('close');
  target.classList.add('open');
  // target.style.maxHeight = target.scrollHeight + 'px';
}

function slideOut(target) {
  target.classList.remove('open');
  target.classList.add('close');
  // target.style.maxHeight = null;
}