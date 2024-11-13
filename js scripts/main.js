document.addEventListener('DOMContentLoaded', function () {
    const modoLuzButton = document.querySelector('.modo-luz');
    const body = document.body;

    let modoClaro = true
    let modoEscuro = false

    if(modoClaro==true && modoEscuro==false){
        modoLuzButton.addEventListener('click', function () {
            body.classList.toggle('modo-escuro');
            modoClaro = false
            modoEscuro = true
        });
    }

    else if(modoClaro == false && modoEscuro == true){
        modoLuzButton.addEventListener('click', function () {
            body.classList.toggle('modo-claro');
            modoClaro = true
            modoEscuro = false
        });
    }
});

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}