

function showAll() {
    const swiperContainer = document.querySelector('.mySwiper');
    swiperContainer.style.display = 'flex';

    // Reinitialize Swiper after making it visible
    swiper.update();
}
function hideSwiper() {
    const openCloseContainer = document.querySelector('.open_close-container');
    
    if (openCloseContainer) {
        openCloseContainer.style.display = 'none';
    }
}
