// References to the supported choice containers
var radioButtonsContainer = document.getElementById("radio-buttons-container"); // default radio buttons
var selectDropDownContainer = document.getElementById("select-dropdown-container"); // minimal appearance
var likertContainer = document.getElementById("likert-container"); // likert

// Prepare the current webview, making adjustments for any appearance options

// minimal appearance
if (fieldProperties.APPEARANCE.includes("minimal") === true) {
  radioButtonsContainer.parentElement.removeChild(radioButtonsContainer); // remove the default radio buttons
  likertContainer.parentElement.removeChild(likertContainer); // remove the likert container
  selectDropDownContainer.style.display = "block"; // show the select dropdown
}
// likert appearance
else if (fieldProperties.APPEARANCE.includes("likert") === true) {
  radioButtonsContainer.parentElement.removeChild(radioButtonsContainer); // remove the default radio buttons
  selectDropDownContainer.parentElement.removeChild(selectDropDownContainer); // remove the select dropdown contrainer
  likertContainer.style.display = "flex"; // show the likert container
}
// all other appearances
else {
  selectDropDownContainer.parentElement.removeChild(selectDropDownContainer); // remove the select dropdown contrainer
  likertContainer.parentElement.removeChild(likertContainer); // remove the likert container
  // quick appearance
  if (fieldProperties.APPEARANCE.includes("quick") === true) {
    var choiceContainers = document.getElementsByClassName("choice-container"); // go through all the available choices
    for (var i = 0; i < choiceContainers.length; i++) {
      choiceContainers[i].classList.add("appearance-quick"); // add the 'appearance-quick' class
      choiceContainers[i].getElementsByClassName("choice-label-text")[0].insertAdjacentHTML('beforeend', '<svg class="quick-appearance-icon"><use xlink:href="#quick-appearance-icon" /></svg>'); // insert the 'quick' icon
    }
  }
}

// Define what happens when the user attempts to clear the response

function clearAnswer() {
  // minimal appearance
  if (fieldProperties.APPEARANCE.includes("minimal") === true) {
    selectDropDownContainer.value = "";
  }
  // likert appearance
  else if (fieldProperties.APPEARANCE.includes("likert") === true) {
    var selectedOption = document.querySelector('.likert-input-button.selected');
    if (selectedOption) {
      selectedOption.classList.remove("selected");
    }
  }
  // all other appearances
  else {
    var selectedOption = document.querySelector('input[name="opt"]:checked');
    if (selectedOption) {
      selectedOption.checked = false;
      selectedOption.parentElement.classList.remove("selected");
    }
  }
}

// Save the user's response (update the current answer)

function change() {
  setAnswer(this.value);
  // If the appearance is 'quick', then also progress to the next field
  if (fieldProperties.APPEARANCE.includes("quick") === true) {
    goToNextField();
  }
}
// minimal appearance
if (fieldProperties.APPEARANCE.includes("minimal") === true) {
  selectDropDownContainer.onchange = change; // when the select dropdown is changed, call the change() function (which will update the current value)
}
// likert appearance
else if (fieldProperties.APPEARANCE.includes("likert") === true) {
  var likertButtons = document.querySelectorAll('div[name="opt"]');
  for (var i = 0; i < likertButtons.length; i++) {
    likertButtons[i].onclick = function () {
      // clear previously selected option (if any)
      var selectedOption = document.querySelector('.likert-input-button.selected');
      if (selectedOption) {
        selectedOption.classList.remove("selected");
      }
      this.classList.add("selected"); // mark clicked option as selected
      change.apply({value: this.getAttribute('data-value')}); // call the change() function and tell it which value was selected
    };
  }
}
// all other appearances
else {
  var buttons = document.querySelectorAll('input[name="opt"]');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].onchange = function () {
      // remove 'selected' class from a previously selected option (if any)
      var selectedOption = document.querySelector('.choice-container.selected');
      if (selectedOption) {
        selectedOption.classList.remove("selected");
      } 
      this.parentElement.classList.add("selected"); // add 'selected' class to the new selected option
      change.apply(this); // call the change() function and tell it which value was selected
    };
  }
}
