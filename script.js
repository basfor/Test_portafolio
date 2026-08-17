// Inicializar el carrusel de la página de inicio
const swiper = new Swiper('.mi-carrusel', {
    loop: true, // Carrusel infinito
    effect: 'fade', // Efecto de transición fotográfica (fundido)
    speed: 1000, // Velocidad de la transición (1 segundo)
    
    autoplay: {
        delay: 4000, // Cambia de foto automáticamente cada 4 segundos
        disableOnInteraction: false, // Sigue automático aunque el usuario use las flechas
    },
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
