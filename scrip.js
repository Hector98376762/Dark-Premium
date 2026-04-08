document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.hamburguesa i');
    const navMenu = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav a');
    const platos = document.querySelectorAll('.plato-item');

    // --- CONTROL DEL MENÚ ---
    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu.classList.toggle('active');

        // Cambia icono Hamburguesa <-> X
        if (navMenu.classList.contains('active')) {
            menuBtn.classList.replace('fa-bars', 'fa-xmark');
        } else {
            menuBtn.classList.replace('fa-xmark', 'fa-bars');
        }
    });

    // Cerrar al tocar un enlace (Inicio, Nosotros...)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuBtn.classList.replace('fa-xmark', 'fa-bars');
        });
    });

    // --- CONTROL DE LA GALERÍA ---
    platos.forEach(plato => {
        plato.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // Si ya está abierto, lo cerramos. Si no, cerramos el resto y abrimos este.
            const estaActivo = plato.classList.contains('is-active');
            
            platos.forEach(p => p.classList.remove('is-active'));

            if (!estaActivo) {
                plato.classList.add('is-active');
            }
        });
    });

    // Cerrar todo si tocas cualquier parte vacía de la pantalla
    document.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuBtn.classList.replace('fa-xmark', 'fa-bars');
        platos.forEach(p => p.classList.remove('is-active'));
    });
});


document.addEventListener("DOMContentLoaded", function () {
    flatpickr("#fecha", {
        dateFormat: "Y-m-d"
    });

    flatpickr("#hora", {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i"
    });
});