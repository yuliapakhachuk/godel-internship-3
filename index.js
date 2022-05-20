// На подію on click міняємо стиль
// нашему мобільному меню, яке у нас закрите.


const openBtn = document.querySelector(".open__menu");
console.log(openBtn);
// openBtn.onclick = () => { closeMobileMenu() };
// openBtn.onclick = changeMenuState; // метод події онклік ТІЛЬКИ ОДНА ПОДІЯ

openBtn.addEventListener("click", changeMenuState);
// openBtn.addEventListener("click", () => { 
//     mobileMenu.classList.toggle("is-open");
// });
const mobileMenu = document.querySelector(".mobile__menu");
console.log(mobileMenu);
function changeMenuState(event) { 
    mobileMenu.classList.toggle("is-open");
    // console.log(event);
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


// слухаи подію скрола на документі
//     коли значення позиції скрола по У буде більше нуля,
//     то додавати клас scroled
// якщо позиція дорівнює нулю, то прибирати цей клас

// вивчити обєкт події для скрола і
// подивитись чи можна взяти позицію скрола звідти ?

const header = document.querySelector(".header");
const headerBtn = document.querySelector(".header__btn");
const logoIcon = document.querySelector(".header__logo use");
console.log(logoIcon);

window.addEventListener("scroll", changeHeaderStyles);
function changeHeaderStyles() { 
    window.scrollY > 0 ?
        header.classList.add("scroled") : header.classList.remove("scroled");
    window.scrollY > 0 ?
        headerBtn.classList.add("scroled") : headerBtn.classList.remove("scroled");
    window.scrollY > 0 ?
        logoIcon.setAttribute("href", "./images/icons.svg#logo") :
        logoIcon.setAttribute("href", "./images/icons.svg#logo-colored");

}
