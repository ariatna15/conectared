/* ==========================================================================
   CONECTARED - ARQUITECTURA MODULAR Y CONTROL DINÁMICO DE NAV/SIDEBAR
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const activeRole =
    typeof CURRENT_USER_ROLE !== "undefined" ? CURRENT_USER_ROLE : "STUDENT";

  // 1. Carga de Componentes Estáticos Reutilizables (Header y Footer)
  loadComponent("header-container", "/components/header.html", () => {
    highlightCurrentPage(".nav-link");
  });

  loadComponent("footer-container", "/components/footer.html");

  // Ejecutar la carga de los componentes bases instalados en el DOM
  loadComponent("header-container", "components/header.html");
  loadComponent("footer-container", "components/footer.html");
  loadComponent("header-landing-container", "components/header-landing.html");
});


//scroll para mostrar menú 
let lastScrollTop = 0;
const header = document.querySelector('.landing-header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Si el usuario baja más de 70px (el tamaño del header)
    if (scrollTop > 70) {
        if (scrollTop > lastScrollTop) {
            // Está scrolleando hacia ABAJO -> Escondemos el menú
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else {
            // Está scrolleando hacia ARRIBA -> Mostramos el menú
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
    } else {
        // Si está arriba del todo, el menú siempre debe estar visible e inmóvil
        header.classList.remove('scroll-down', 'scroll-up');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Evita errores en rebotes de scroll en Mac
});
