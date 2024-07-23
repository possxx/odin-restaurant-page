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

function createNavigation(text) {
    const button = document.createElement("div");
    button.classList.add("nav-button");
    const paragraph = document.createElement("p");
    paragraph.classList.add("nav-text");
    paragraph.innerText = text;
    button.appendChild(paragraph);

    return button;
}

navNavigation.appendChild(createNavigation("Home"));
navNavigation.appendChild(createNavigation("Menu"));
navNavigation.appendChild(createNavigation("Contact"));

navContainer.appendChild(navNavigation);

contentContainer.appendChild(home());

const navButtons = document.querySelectorAll(".nav-button");
navButtons.forEach(button => {
    if (button.innerText == "Home") {
        button.addEventListener("click", () => {
            contentContainer.replaceChildren(home());
        })
    } else if (button.innerText == "Menu") {
        button.addEventListener("click", () => {
            contentContainer.replaceChildren(menu());
        })
    } else if (button.innerText == "Contact") {
        button.addEventListener("click", () => {
            contentContainer.replaceChildren(contact());
        })
    }
})
