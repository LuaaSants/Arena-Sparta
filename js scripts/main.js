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