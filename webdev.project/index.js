const categories = document.querySelectorAll('.category');
const swiperContainers = document.querySelectorAll('.swiper-container');

const swiperOptions = {
  slidesPerView: 'auto',
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
};

const swipers = [];

swiperContainers.forEach((container) => {
  const swiper = new Swiper(container, swiperOptions);
  swipers.push(swiper);
});

categories.forEach((category, index) => {
  category.addEventListener('click', () => {
    categories.forEach((cat) => cat.classList.remove('active'));
    category.classList.add('active');
    swipers.forEach((swiper) => {
      swiper.slideTo(index, 300, false);
    });
  });
});
