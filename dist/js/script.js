// navbarfixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

// nav dan hamburger menu
const hamburgermenu = document.querySelector('#hamburgermenu')
const navmenu = document.querySelector('#nav-menu');

hamburgermenu.addEventListener('click', function() {
  hamburgermenu.classList.toggle('hamburger-active')
  navmenu.classList.toggle('hidden');
});