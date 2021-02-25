var imagenes = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg', 'img/06.jpg', 'img/07.jpg', 'img/08.jpg', 'img/09.jpg', 'img/10.jpg', 'img/11.jpg', 'img/12.jpg', 'img/13.jpg', 'img/14.jpg', 'img/15.jpg', 'img/16.jpg'];
var cont = 0;

function carrucel(contenedor) {
    contenedor.addEventListener('click', e => {
        let atras = contenedor.querySelector('.atras');
        let adelante = contenedor.querySelector('.adelante');
        let img = contenedor.querySelector('imag');
        let tgt = e.target;


        if (tgt == atras) {
            if (cont > 0) {
                img.src = imagenes[cont - 1];
                cont--;

            }
            else {
                img.src = imagenes[imagenes.length - 1];
                cont = imagenes.length - 1;

            }

        }
        else if (tgt == adelante) {
            if (cont < imagenes.length - 1) {
                img.src = imagenes[cont + 1];
                cont++;

            }
            else {
                img.src = imagenes[0];
                cont = 0;

            }


        }


    });
}

document.addEventListener("DOMContentloaded", () =>{
    let contenedor = document.querySelector('.contenedora');
    carrucel(contenedor);
});