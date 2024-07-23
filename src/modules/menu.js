import cappuccino from "../images/cappuccino.png";
import macchiato from "../images/macchiato.png";
import latte from "../images/latte.png";
import smoothie from "../images/smoothie.png";
import "./style.css";

export default function createMenu() {
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    const cappuccinoContainer = document.createElement("div");
    cappuccinoContainer.classList.add("cappuccino");
    const cappuccinoImage = new Image();
    cappuccinoImage.classList.add("menu-image");
    cappuccinoImage.src = cappuccino;
    cappuccinoImage.alt = "Image of cappuccino";
    cappuccinoContainer.appendChild(cappuccinoImage);

    const cappuccinoTextContainer = document.createElement("div");
    cappuccinoTextContainer.classList.add("menu-text")
    cappuccinoContainer.appendChild(cappuccinoTextContainer);

    const cappuccinoHeading = document.createElement("h1");
    cappuccinoHeading.classList.add("heading");
    cappuccinoHeading.innerText = "Classic Cappuccino";
    cappuccinoTextContainer.appendChild(cappuccinoHeading);

    const cappuccinoParagraph = document.createElement("p");
    cappuccinoParagraph.classList.add("paragraph");
    cappuccinoParagraph.innerText = "Our Classic Cappuccino is a harmonious blend of rich espresso and velvety steamed milk, topped with a generous layer of frothy foam. This timeless favorite is perfect for a morning boost or an afternoon pick-me-up.";
    cappuccinoTextContainer.appendChild(cappuccinoParagraph);


    menuContainer.appendChild(cappuccinoContainer);

    const macchiatoContainer = document.createElement("div");
    macchiatoContainer.classList.add("macchiato");
    const macchiatoImage = new Image();
    macchiatoImage.classList.add("menu-image");
    macchiatoImage.src = macchiato;
    macchiatoImage.alt = "Image of macchiato";

    const macchiatoTextContainer = document.createElement("div");
    macchiatoTextContainer.classList.add("menu-text");

    macchiatoContainer.appendChild(macchiatoTextContainer);
    macchiatoContainer.appendChild(macchiatoImage);

    const macchiatoHeading = document.createElement("h1");
    macchiatoHeading.classList.add("heading");
    macchiatoHeading.innerText = "Iced Caramel Macchiato";
    macchiatoTextContainer.appendChild(macchiatoHeading);

    const macchiatoParagraph = document.createElement("p");
    macchiatoParagraph.classList.add("paragraph");
    macchiatoParagraph.innerText = "Indulge in our Iced Caramel Macchiato, a refreshing combination of smooth espresso, creamy milk, and luscious caramel syrup. Served over ice and topped with a drizzle of caramel, this drink is the ultimate sweet treat for hot days.";
    macchiatoTextContainer.appendChild(macchiatoParagraph);

    menuContainer.appendChild(macchiatoContainer);

    const latteContainer = document.createElement("div");
    latteContainer.classList.add("latte");
    const latteImage = new Image();
    latteImage.classList.add("menu-image");
    latteImage.src = latte;
    latteImage.alt = "Image of latte";
    latteContainer.appendChild(latteImage);

    const latteTextContainer = document.createElement("div");
    latteTextContainer.classList.add("menu-text")
    latteContainer.appendChild(latteTextContainer);

    const latteHeading = document.createElement("h1");
    latteHeading.classList.add("heading");
    latteHeading.innerText = "Matcha Green Tea Latte";
    latteTextContainer.appendChild(latteHeading);

    const latteParagraph = document.createElement("p");
    latteParagraph.classList.add("paragraph");
    latteParagraph.innerText = "Experience the vibrant flavors of our Matcha Green Tea Latte. Made with high-quality matcha powder and steamed milk, this drink offers a perfect balance of earthiness and sweetness. It's a deliciously wholesome choice for a calming, yet invigorating beverage.";
    latteTextContainer.appendChild(latteParagraph);


    menuContainer.appendChild(latteContainer);

    const smoothieContainer = document.createElement("div");
    smoothieContainer.classList.add("smoothie");
    const smoothieImage = new Image();
    smoothieImage.classList.add("menu-image");
    smoothieImage.src = smoothie;
    smoothieImage.alt = "Image of smoothie";

    const smoothieTextContainer = document.createElement("div");
    smoothieTextContainer.classList.add("menu-text");

    smoothieContainer.appendChild(smoothieTextContainer);
    smoothieContainer.appendChild(smoothieImage);

    const smoothieHeading = document.createElement("h1");
    smoothieHeading.classList.add("heading");
    smoothieHeading.innerText = "Berry Bliss Smoothie";
    smoothieTextContainer.appendChild(smoothieHeading);

    const smoothieParagraph = document.createElement("p");
    smoothieParagraph.classList.add("paragraph");
    smoothieParagraph.innerText = "Our Berry Bliss Smoothie is a delightful blend of fresh strawberries, blueberries, raspberries, and creamy yogurt. This antioxidant-rich drink is both nutritious and satisfying, making it an ideal option for a healthy snack or a refreshing meal replacement.";
    smoothieTextContainer.appendChild(smoothieParagraph);

    menuContainer.appendChild(smoothieContainer);

    return menuContainer;
}