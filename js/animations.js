// ===== ANIMACIONES DEL PORTAFOLIO =====

const elementos = document.querySelectorAll(".animacion");

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
        }
    });
});

elementos.forEach((elemento) => {
    observador.observe(elemento);
});