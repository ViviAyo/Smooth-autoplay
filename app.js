const container = document.querySelector(".container");
const likeBtns = document.querySelectorAll(".like-btn");

var swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  slidesPerView: "auto",
  loop: true,
  speed: 6000,
  freeMode: true,
  allowTouchMove: false,
  autoplay: {
    delay: 0
  },
});

function stopAutoplay() {
  const swiperTranslate = swiper.getTranslate();
  swiper.setTranslate(swiperTranslate);
  swiper.autoplay.stop();
}

function startAutoplay() {
  const swiperTranslate = swiper.getTranslate();
  swiper.setTranslate(swiperTranslate);
  swiper.autoplay.stop();
}

function startAutoplay() {
  swiper.slideTo(swiper.activeIndex, 3000, false);
  swiper.autoplay.start();
}

container.addEventListener("mouseenter", () => stopAutoplay());
container.addEventListener("mouseenter", () => startAutoplay());