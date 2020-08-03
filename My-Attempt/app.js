// DOM References
const accordionItemEls = document.querySelectorAll(".accordion__item")

function toggleItem() {
  // Loop through the accordionItemEls and add an eventListeners to the accordion__questions
  for (let item of accordionItemEls) {
    // Define reference to the accordion__question
    let accQuestion = item.firstElementChild;

    // Add listener to accQuestion for a click that will display accordion__answer
    accQuestion.addEventListener("click", function() {
      let accAnswer = this.nextElementSibling;

      // Check if the answer is NOT collapsed: collapse it and change icon to "+"
      if (accAnswer.style.maxHeight != 0) {
        accAnswer.style.maxHeight = null;
        this.lastElementChild.innerHTML = "+"
      } else {
        accAnswer.style.maxHeight = `${accAnswer.scrollHeight}px` // use scrollHeight here to give just enough height necessary
        this.lastElementChild.innerHTML = "-"
      }
    })
  }
}

toggleItem()