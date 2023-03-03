let menuBar = document.querySelector('#menu-bar');
let menuLink = document.querySelector('.main-menu');
menuBar.addEventListener('click', function (){
    menuBar.classList.toggle('fa-times');
    menuLink.classList.toggle('active');
});
// Swiper
var swiper = new Swiper(".review-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
   loop:true,
   breakpoints: {
    0: {
        slidesPerView: 1.05,
    },
    640: {
      slidesPerView: 1.09,
    },
    768: {
      slidesPerView: 1.7,
    },
    1024: {
      slidesPerView: 2,
    },
  },
  });