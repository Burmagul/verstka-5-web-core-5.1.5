const button = document.querySelector('#main_button-one');
let isOpen = true;

const svgImage = document.createElement('img');
svgImage.src = './icon/button.svg';

button.addEventListener("click", function () {
    const openCloseContainer = document.querySelector('.open_close-container');
    
    // Проверяем, был ли элемент найден
    if (openCloseContainer) {
        openCloseContainer.style.display = isOpen ? "none" : "grid";
    }

    button.innerHTML = isOpen ? `${svgImage.outerHTML} Показать все` : `${svgImage.outerHTML} Скрыть`;

    isOpen = !isOpen;
});














// №№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№   Swiper     №№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№


const swiperContainer = document.querySelector('.swiper');


  const mySwiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }); 



function initSwiper() {
  if (window.innerWidth < 449) {
    if (!swiperContainer.classList.contains('swiper-container-initialized')) {
      mySwiper.init();
    }
  } else {
    if (swiperContainer.classList.contains('swiper-container-initialized')) {
      mySwiper.destroy();
    }
  }
}







