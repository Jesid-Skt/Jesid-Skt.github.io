let angle = 0;

// Función para rotar el carrusel automáticamente
function rotateCarousel() {
    const carousel = document.querySelector('.carrusel');
    angle += 90; // Rotar 90 grados en cada intervalo
    carousel.style.transform = `rotateY(${angle}deg)`;
}

// Rotación automática cada 3 segundos
setInterval(rotateCarousel, 3000);