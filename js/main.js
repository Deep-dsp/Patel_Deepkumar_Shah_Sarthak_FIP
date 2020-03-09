(() => {

const burger = document.querySelector('.burgerMenu');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

function openMenu()
{
    // Toggle Nav
    nav.classList.toggle('nav-active');

    //Animating Links - Left to Right
    navLinks.forEach((link,index) =>{
        if(link.style.animation)
        {
          link.style.animation = '';
        }
        else
        {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.8}s`;
        }
    });

    burger.classList.toggle('toggle');
}


burger.addEventListener('click',openMenu);

})();
