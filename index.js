// На подію on click міняємо стиль
// нашему мобільному меню, яке у нас закрите.


const header = document.querySelector(".header");
const headerBtn = document.querySelector(".header__btn");
const logoIcon = document.querySelector(".header__logo use");
const openBtn = document.querySelector(".open__menu");
const mobileMenu = document.querySelector(".mobile__menu");


openBtn.addEventListener("click", changeMenuState);

function changeMenuState(event) { 
    mobileMenu.classList.toggle("is-open");

    if (mobileMenu.classList.contains('is-open')) {
        header.classList.add("scroled");
        logoIcon.setAttribute("href", "./images/icons.svg#logo");
        openBtn.firstElementChild.setAttribute("href", "./images/icons.svg#close");
    } else { 
        openBtn.firstElementChild.setAttribute("href", "./images/icons.svg#menu");
    }
}

window.addEventListener("scroll", changeHeaderStyles);

function changeHeaderStyles() { 

    if (window.scrollY > 0) {
        header.classList.add("scroled");
        logoIcon.setAttribute("href", "./images/icons.svg#logo");
    } else { 
        if (mobileMenu.classList.contains('is-open')) { 
            return;
        }
        header.classList.remove("scroled");
        logoIcon.setAttribute("href", "./images/icons.svg#logo-colored");
    }

    // (window.scrollY > 0) ?
    //     header.classList.add("scroled") : header.classList.remove("scroled");
    // window.scrollY > 0 ?
    //     logoIcon.setAttribute("href", "./images/icons.svg#logo") :
    //     logoIcon.setAttribute("href", "./images/icons.svg#logo-colored");
}


// const menuLink = document.querySelector(".mob__menu--link");
// document.addEventListener("mousemove", (event) => { 
//     const middleY = window.innerHeight / 2;
//     const middleX = window.innerWidth / 2; 
//     const { screenX, screenY } = event;
//     const calcX = screenX < middleX ? -screenX : screenX;
//     const calcY = screenY < middleY ? -screenY : screenY;
//     menuLink.style.transform = `translate(${calcX / 50}px, ${calcY / 50}px)`;
// })

