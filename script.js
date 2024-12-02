document.getElementById('clickable-image').addEventListener('click', function () {
    // Mostrar pantalla blanca
    document.getElementById('white-screen').style.display = 'block';

    // Espera 300ms antes de ocultar la pantalla blanca y mostrar el portafolio
    setTimeout(function () {
        document.getElementById('white-screen').style.display = 'none';
        document.body.classList.add('portafolio-active');  // Muestra el portafolio
        document.getElementById('header').style.display = 'block';  // Muestra el header

        // Desplazamiento suave hacia la sección de portafolio
        window.scrollTo({
            top: document.getElementById('portafolio').offsetTop,
            behavior: 'smooth'
        });
    }, 300); // Ajusta el tiempo si es necesario
});

const clickableImage = document.getElementById('clickable-image');
const whiteScreen = document.getElementById('white-screen');
const mousePointer = document.querySelector('.mouse-pointer');

// Agregar evento de clic a la imagen
clickableImage.addEventListener('click', () => {
    // Ocultar el ícono de ratón
    mousePointer.style.display = 'none';

    // Mostrar la pantalla blanca
    whiteScreen.style.display = 'block';

    // Después de 1 segundo, ocultar la pantalla blanca y mostrar el portafolio
    setTimeout(() => {
        whiteScreen.style.display = 'none';
        document.body.classList.add('portafolio-active'); // Cambiar a la clase activa
    }, 300); // Tiempo de animación
});
