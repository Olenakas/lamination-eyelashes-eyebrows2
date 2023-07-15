   const swiper = new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
         dynamicBullets:true,
      },
      slidesPerView: 3.5,
      watchOverflow: true,
   });
    

