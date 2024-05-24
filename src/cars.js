const carouselRow = document.querySelector('.frame_box3');
const carouselSlides = document.getElementsByClassName('frame_box3-cars');
const dots = document.getElementsByClassName('dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0; // Đặt index ban đầu là 0
width=carouselSlides[0].clientWidth;
carouselRow.style.transform = 'translateX(' + (-width * index) + 'px)';

nextBtn.addEventListener('click', nextSlide);

function nextSlide() {
    if (index >= carouselSlides.length - 1) { return; }
    index++;
    carouselRow.style.transition = 'transform 0.4s ease-out';
    carouselRow.style.transform = 'translateX(' + (-width * index) + 'px)';
}

prevBtn.addEventListener('click', prevSlide);

function prevSlide() {
    if (index <= 0) { return; }
    index--;
    carouselRow.style.transition = 'transform 0.4s ease-out';
    carouselRow.style.transform = 'translateX(' + (-width * index) + 'px)';
}
