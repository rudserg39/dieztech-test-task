import Swiper, { Navigation, Pagination, Keyboard } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/scss/keyboard';

const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination, Keyboard],
  direction: "horizontal",
  loop: false,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    1920: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
    bulletClass: "swiper-bullet",
    bulletActiveClass: "swiper-bullet-active",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});