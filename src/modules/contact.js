import "./style.css";

export default function createContact() {
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");

    const contactUs = document.createElement("div");
    contactUs.classList.add("contact");
    const contactUsHeading = document.createElement("h1");
    contactUsHeading.classList.add("heading");
    const contactUsParagraph = document.createElement("p");
    contactUsParagraph.classList.add("paragraph");
    contactUsHeading.innerText = "Contact Us";
    contactUsParagraph.innerText = "We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us. You can visit us at our cafe or contact us via phone or email.";
    contactUs.appendChild(contactUsHeading);
    contactUs.appendChild(contactUsParagraph);
    contactContainer.appendChild(contactUs);

    const openingHours = document.createElement("div");
    openingHours.classList.add("opening-hours");
    const openingHoursHeading = document.createElement("h1");
    openingHoursHeading.classList.add("heading");
    const openingHoursParagraph = document.createElement("p");
    openingHoursParagraph.classList.add("paragraph");
    openingHoursHeading.innerText = "Opening Hours:"
    openingHoursParagraph.innerText = "Monday - Friday: 7:00 AM - 7:00 PM\nSaturday - Sunday: 8:00 AM - 6:00 PM";
    openingHours.appendChild(openingHoursHeading);
    openingHours.appendChild(openingHoursParagraph);
    contactContainer.appendChild(openingHours);

    return contactContainer;
}