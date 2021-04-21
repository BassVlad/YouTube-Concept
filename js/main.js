const MyChannelSlider = new Swiper('.my-channel-slider', {
  // Optional parameters

  loop: true,
  slidesPerView:1,
  spaceBetween:20,
  breakpoints: {

    700: {
      slidesPerView: 1,
      
    },
    785: {
      slidesPerView: 1,
      
    },
    787: {
      slidesPerView: 2,
      
    },
   
    992: {
      slidesPerView: 3,
      
    },    
    1200: {
      slidesPerView: 4,
      
    },
    
    1300: {
      slidesPerView: 5,
      
    },    
    1920: {
      slidesPerView: 6,
      
    }
  },
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
  slidesPerView:1,
  
  spaceBetween:350,
  // If we need pagination
  breakpoints: {
    
    700: {
      slidesPerView: 1,
      spaceBetween:450
    },
    900: {
      slidesPerView: 2,
      spaceBetween:250
    },
    
    1600: {
      slidesPerView: 3,
      spaceBetween:110,
    },
    1900: {
      slidesPerView: 3,
      spaceBetween:199,
    },
    2100: {
      slidesPerView: 6,
      spaceBetween:20,
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '#rec-button-prev',
    prevEl: '#rec-button-next',
  },
  

  
});
const VideoSlider = new Swiper('.video-channel-slider', {
  // Optional parameters

  loop: true,
  slidesPerView:1,
  spaceBetween:20,
  breakpoints: {
    
    700: {
      slidesPerView: 1,
      
    },
    785: {
      slidesPerView: 1,
      
    },
    787: {
      slidesPerView: 2,
      
    },
    
    992: {
      slidesPerView: 3,
      
    },    
    1200: {
      slidesPerView: 4,
      
    },
    
    1400: {
      slidesPerView: 5,
      
    },    
    1920: {
      slidesPerView: 6,
      
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '#video-button-prev',
    prevEl: '#video-button-next',
  },
  

  
});
const searchBtn = document.querySelector('.mobile-search');
const mobileSearch = document.querySelector('.input-group');
searchBtn.addEventListener('click', () => {
  mobileSearch.classList.toggle('is-open');
});
if (document.documentElement.scrollWidth <= 640) {
  myChannelSlider.destroy();
  recommendedChannelSlider.destroy();
  recommendedSlider.destroy();
}
  const MymobileChannelSlider = new Swiper('.my-mobile-channel-slider', {
  // Optional parameters

  loop: true,
  slidesPerView:1,
  spaceBetween:20,
  breakpoints: {
  
    700: {
      slidesPerView: 1,
      
    },
    785: {
      slidesPerView: 1,
      
    },
  },
  navigation: {
    nextEl: '#mobile-button-prev',
    prevEl: '#mobile-button-next',
  },
})
document.getElementById("button2").style.backgroundColor ="red";
document.getElementById("button2").onclick = function(){
  this.style.backgroundColor ="gray";
  
};
const NobileRecomendendSlider = new Swiper('.mobile-rec-channel-slider', {
  // Optional parameters

  loop: true,
  slidesPerView:1,
  
  spaceBetween:350,
  // If we need pagination
  breakpoints: {
    700: {
      slidesPerView: 1,
      spaceBetween:450
    },
} 
});
const VideoSlider = new Swiper('.mobile-video-channel-slider', {
  // Optional parameters

  loop: true,
  slidesPerView:1,
  spaceBetween:20,
  breakpoints: {

    700: {
      slidesPerView: 1,
      
    },
    785: {
      slidesPerView: 1,
      
    },
  }
  

  
});