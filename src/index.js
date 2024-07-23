import home from "./modules/home";
import menu from "./modules/menu";
import contact from "./modules/contact";

const body = document.querySelector("body");
const pageContainer = document.createElement("div");
pageContainer.classList.add("page");
const navContainer = document.createElement("div");
navContainer.classList.add("nav");
const contentContainer = document.createElement("div");
contentContainer.classList.add("content");

body.appendChild(pageContainer);
pageContainer.appendChild(navContainer);
pageContainer.appendChild(contentContainer);

const navNavigation = document.createElement("nav");
navNavigation.classList.add("navigation");

function createNavigation(text, value) {
    const button = document.createElement("div");
    button.classList.add("nav-button");
    button.classList.add(`${value}`)
    const paragraph = document.createElement("p");
    paragraph.classList.add("nav-text");
    paragraph.innerText = text;
    button.appendChild(paragraph);

    return button;
}

navNavigation.appendChild(createNavigation("Home", "home"));
navNavigation.appendChild(createNavigation("Menu", "menu"));
navNavigation.appendChild(createNavigation("Contact", "contact"));

navContainer.appendChild(navNavigation);

contentContainer.appendChild(home());

const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const contactButton = document.querySelector(".contact");

homeButton.classList.add("active-element");

homeButton.addEventListener("click", () => {
    contentContainer.replaceChildren(home());
    homeButton.classList.add("active-element");
    menuButton.classList.remove("active-element");
    contactButton.classList.remove("active-element");
})

menuButton.addEventListener("click", () => {
    contentContainer.replaceChildren(menu());
    menuButton.classList.add("active-element");
    homeButton.classList.remove("active-element");
    contactButton.classList.remove("active-element");
})

contactButton.addEventListener("click", () => {
    contentContainer.replaceChildren(contact());
    contactButton.classList.add("active-element");
    homeButton.classList.remove("active-element");
    menuButton.classList.remove("active-element");
})


