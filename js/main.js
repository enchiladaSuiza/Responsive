const navMenu = document.getElementById('nav_menu'),
    navBoton = document.getElementById('nav_boton'),
    navCerrar = document.getElementById('nav_cerrar')

if (navBoton) {
    navBoton.addEventListener('click', () => {
        navMenu.classList.add('mostrar_menu')
    })
}

if (navCerrar) {
    navCerrar.addEventListener('click', () => {
        navMenu.classList.remove('mostrar_menu')
    })
}

const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))