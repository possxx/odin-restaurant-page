import image from "../images/cafe-home.jpg";
import "./style.css";

export default function createHome() {
    const homeContainer = document.createElement("div");
    homeContainer.classList.add("content-container");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("home-image")
    const homeImage = new Image();
    homeImage.src = image;
    homeImage.alt = "Inside of a cafe";
    imageContainer.appendChild(homeImage);

    const headingContainer = document.createElement("div");
    headingContainer.classList.add("heading");
    const heading = document.createElement("h1");
    heading.innerText = "Experience Tranquility at The Rustic Bean Café";
    headingContainer.appendChild(heading);

    const paragraphContainer = document.createElement("div");
    paragraphContainer.classList.add("paragraph");
    const paragraph = document.createElement("p");
    paragraph.innerText = "Nestled in the heart of the countryside, The Rustic Bean Café offers a serene escape from the hustle and bustle of everyday life. With its sleek, modern interiors, large windows flooding the space with natural light, and exceptionally friendly staff, this cozy haven invites you to savor locally sourced delights and aromatic coffee blends. Whether you're seeking a quiet corner to read or a friendly space to connect, The Rustic Bean Café is your perfect rural retreat.";
    paragraphContainer.appendChild(paragraph);

    homeContainer.appendChild(headingContainer);
    homeContainer.appendChild(paragraphContainer);
    homeContainer.appendChild(imageContainer);
    
    return homeContainer;
}
