   const swiper = new Swiper(".swiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
         el: '.my-swiper-pagination',
         bulletClass: 'my-pagination-bullet',
         bulletActiveClass: '.my-pagination-bullet-current',
         clackabletClass: '.my-pagination-bullet-clickable',
         clickable: true,
         dynamicBullets:true,
      },
      slidesPerView: 3.5,
      watchOverflow: true,
   });
    

