const header = document.querySelector(".header");
const logoIcon = document.querySelector(".header__logo use");
const openBtn = document.querySelector(".open__menu");
const mobileMenu = document.querySelector(".mobile__menu");

const setHeaderState = ({ isScrolled, iconLink }) => { 
    isScrolled ? header.classList.add("scrolled") : header.classList.remove("scrolled");
    logoIcon.setAttribute("href", iconLink);
}

openBtn.addEventListener("click", changeMenuState);

function changeMenuState() { 
    mobileMenu.classList.toggle("is-open");

    if (mobileMenu.classList.contains('is-open')) {
        setHeaderState({isScrolled: true, iconLink: "./images/icons.svg#logo"});
        openBtn.firstElementChild.setAttribute("href", "./images/icons.svg#close");
    } else { 
        if (window.scrollY === 0) {
        setHeaderState({isScrolled: false, iconLink: "./images/icons.svg#logo-colored"});
        }
        openBtn.firstElementChild.setAttribute("href", "./images/icons.svg#menu");
    }
}

window.addEventListener("scroll", changeHeaderStyles);

function changeHeaderStyles() { 
    if (window.scrollY > 0 || mobileMenu.classList.contains('is-open')) {
        setHeaderState({isScrolled: true, iconLink: "./images/icons.svg#logo"});
    } else { 
        setHeaderState({isScrolled: false, iconLink: "./images/icons.svg#logo-colored"});
    }
}

