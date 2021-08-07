"use strict";

//each <a> element  event handler for the click event
const toggle = (evt) => {
  // It fetches the each clicked link element
  const linkElement = evt.currentTarget;
  // It fetches the h2 tag for each of the <a> tag
  const h2Element = linkElement.parentNode;
  // It fetches the each h2's sibling div
  const divElement = h2Element.nextElementSibling;

  // h2Element.classList.toggle("minus");
  if (h2Element.hasAttribute("class")) {
    h2Element.removeAttribute("class");
  } else {
    h2Element.className = "minus";
  }

  // divElement.classList.toggle("open");
  if (divElement.hasAttribute("class")) {
    divElement.removeAttribute("class");
  } else {
    divElement.className = "open";
  }

  // It will cancel the default action of the a tag.
  evt.preventDefault();
};

document.addEventListener("DOMContentLoaded", () => {
  // fetches the all a tags
  const linkElements = faqs.querySelectorAll("#faqs a");

  // It attaches the event handler for each one of the <a> tag
  for (let linkElement of linkElements) {
    linkElement.addEventListener("click", toggle);
  }
  // it will sets the focus on the first <a> tag.
  linkElements[0].focus();
});
