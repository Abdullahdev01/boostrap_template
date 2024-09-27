const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// Show menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// Close menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

const navLinks = document.querySelectorAll('.nav-link')

const linkAction = () => {
    navMenu.classList.remove('show-menu')
}

navLinks.forEach(link => link.addEventListener('click', linkAction))
