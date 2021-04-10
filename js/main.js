const MyChannelSlider = new Swiper('.my-channel-slider', {
  // Optional parameters

  loop: true,
  slidesPerView:6,
  // If we need pagination
  
  // Navigation arrows
  navigation: {
    nextEl: '#button-prev',
    prevEl: '#button-next',
  },
  

  
});
const RecomendendSlider = new Swiper('.rec-channel-slider', {
  // Optional parameters

  loop: true,
  slidesPerView:3,
  // If we need pagination
  
  // Navigation arrows
  navigation: {
    nextEl: '#rec-button-prev',
    prevEl: '#rec-button-next',
  },
  

  
});
const VideoSlider = new Swiper('.video-channel-slider', {
  // Optional parameters

  loop: true,
  slidesPerView:6,
  // If we need pagination
  
  // Navigation arrows
  navigation: {
    nextEl: '#video-button-prev',
    prevEl: '#video-button-next',
  },
  

  
});