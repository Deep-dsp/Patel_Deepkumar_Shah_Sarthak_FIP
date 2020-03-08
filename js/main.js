(() => {

const burger = document.querySelector('.burgerMenu');
const nav = document.querySelector('.nav-links');

function openMenu()
{
    nav.classList.toggle('nav-active');
}


burger.addEventListener('click',openMenu);

})();
