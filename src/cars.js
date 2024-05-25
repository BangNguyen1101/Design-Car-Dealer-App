document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 1;
    showSlides(slideIndex);
    document.querySelector('.prev').addEventListener('click', () => {
        plusSlides(-1);
    });

    document.querySelector('.next').addEventListener('click', () => {
        plusSlides(1);
    });

    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide(index + 1);
        });
    });

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.querySelectorAll('.frame_box3-cars');
        let dots = document.querySelectorAll('.dot');
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "flex";
        dots[slideIndex-1].className += " active";
    }
});
