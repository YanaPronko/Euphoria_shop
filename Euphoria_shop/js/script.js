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

  // const swiper = new Swiper(".swiper", {
  //   // Optional parameter
  //   lazy: true,
  //   // If we need pagination
  //   pagination: {
  //     el: ".slider-swiper__pagination",
  //     clickable: true,
  //   },

  //   // Navigation arrows
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  // });

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
});
