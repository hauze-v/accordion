// DOM references
const accordionItemEls = document.querySelectorAll(".accordion__item")

// for (let item of accordionItemEls) {
//   item.firstElementChild.addEventListener("click", function(event) {

//     if (event.target.classList.contains("accordion__question") ||
//         event.target.classList.contains("accordion__icon")) {
//       event.target.parentNode.nextElementSibling.classList.toggle("display")
//     }
//     if (event.target.classList.contains("accordion__heading")) {
//       event.target.parentNode.nextElementSibling.classList.toggle("display")
//       event.target.childNodes[3].innerHTML = "-";
//     }
    
//   })
// }

// --- USE THE THIS KEYWORD! YAY FOR OBJECT ORIENTED PROGRAMMING ---

// Loop through the accordionItemEls and addEventListeners to their accordion__headers
for (let item of accordionItemEls) {
  // Define reference to the accordion__header
  let accHeader = item.firstElementChild;

  // Add listener to accHeader for a click that will display accordion__details
  accHeader.addEventListener("click", function() {
    // Define reference to the accordion__details
    let accDetails = this.nextElementSibling;
    
    // If the details are NOT collapsed: collapse them and change icon to "+"
    if (accDetails.style.maxHeight != 0) {
      accDetails.style.maxHeight = null;
      this.lastElementChild.innerHTML = "+"
    } else { // else if they ARE collapsed: display them and change icon to "-"
      accDetails.style.maxHeight = `${accDetails.scrollHeight}px` // use scrollHeight here to give height to object
      this.lastElementChild.innerHTML = "-"
    }
  })
}