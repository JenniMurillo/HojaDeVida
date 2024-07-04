document.addEventListener('DOMContentLoaded', (event) => {
    const enlaces = document.querySelectorAll('.caja-enlace');

    enlaces.forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            alert(`Va a cambiar a la carpeta: ${enlace.textContent}`);
        });
    });
});
