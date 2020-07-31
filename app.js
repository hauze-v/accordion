// DOM references
const accordionItemEls = document.querySelectorAll(".accordion__item")

// Loop through the accordionItemEls and addEventListeners to the accordion__heading
for (let item of accordionItemEls) {
  // Add event listener to accordion__heading element
  item.firstElementChild.addEventListener("click", function(event) {
    // If the target of the click is the question, icon, or header itself, toggle the display class on the respective accordion__detailsEl
    if (event.target.classList.contains("accordion__question") ||
        event.target.classList.contains("accordion__icon")) {
      event.target.parentNode.nextElementSibling.classList.toggle("display")
    }

    if (event.target.classList.contains("accordion__heading")) {
      event.target.parentNode.nextElementSibling.classList.toggle("display")
    }
    
  })
}