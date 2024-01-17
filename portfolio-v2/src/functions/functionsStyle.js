
document.addEventListener('DOMContentLoaded', function () {
    // Tu código JavaScript aquí

    const textoCambiante = document.getElementById('logo');

    window.addEventListener('scroll', () => {
        // Obtiene la posición vertical actual del scroll
        const scrollY = window.scrollY;

        // Ajusta el tamaño de fuente en función de la posición de desplazamiento
        const newSize = 8 + scrollY * 0.02; // Ajusta la velocidad de cambio
        textoCambiante.style.fontSize = `${newSize}rem`;
    });
});