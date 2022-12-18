let menuBar = document.querySelector('#menu-bar');
let menuLink = document.querySelector('.main-menu');
menuBar.addEventListener('click', function (){
    menuBar.classList.toggle('fa-times');
    menuLink.classList.toggle('active');
});
// Swiper
var swiper = new Swiper(".main-slide", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   loop:true,
  });