function parallax (event) {
    this.querySelectorAll('.layer').forEach (layer=> {
        let speed = layer.getAttribute('data-speed');
        layer.style.transform = `translateX(${event.clientX*speed/500}px)`
    });
}

document.addEventListener('mousemove', parallax);

// ==== SLIDES ====
let dots = document.getElementsByClassName('dots-item'),
    dotsArea = document.getElementsByClassName('dots-block')[0],
    slides = document.getElementsByClassName('slides-item'),
    prevBtn = document.getElementById('left-button'),
    nextBtn = document.getElementById('right-button'),
    slideIndex = 1;

    showSLides(slideIndex);

function showSLides (n) {
    if (n < 1) {
        slideIndex = slides.length;
    }
    else if (n > slides.length){
        slideIndex = 1;
    }
    for (let i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    slides[slideIndex - 1].style.display ='block';
    dots[slideIndex - 1].classList.add('active');
}


function plusSlides(n) {
    showSLides(slideIndex +=n);
}

function currentSlide (n) {
    showSLides(slideIndex = n);
}
prevBtn.onclick = function() {
    plusSlides(-1);
}
nextBtn.onclick = function() {
    plusSlides(1);
}

dotsArea.onclick = function (e){
    for (let i = 0; i < dots.length + 1; i++){
        if (e.target.classList.contains('dots-item') && e.target == dots[i -1]){
            currentSlide(i);
        }
    }
}
// ==== /SLIDES ====


