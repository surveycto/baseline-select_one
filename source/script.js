// References to the supported choice containers
var radioButtonsContainer = document.getElementById("radio-buttons-container"); // default radio buttons
var selectDropDownContainer = document.getElementById("select-dropdown-container"); // minimal appearance
var likertContainer = document.getElementById("likert-container"); // likert

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
    // remove the default radio buttons
    radioButtonsContainer.parentElement.removeChild(radioButtonsContainer);
    // remove the likert container
    likertContainer.parentElement.removeChild(likertContainer);
    // show the select dropdown
    selectDropDownContainer.style.display = "block";
    // when the select dropdown is changed, call the change() function and tell it which value was selected
    selectDropDownContainer.onchange = change;
}
// likert appearance
else if (fieldProperties.APPEARANCE.includes("likert") === true) {
    // remove the default radio buttons
    radioButtonsContainer.parentElement.removeChild(radioButtonsContainer);
    // remove the select dropdown contrainer
    selectDropDownContainer.parentElement.removeChild(selectDropDownContainer);
    // show the likert container
    likertContainer.style.display = "flex";

    // what to do when an option is clicked
    var likertButtons = document.querySelectorAll('div[name="opt"]');
    for (var i = 0; i < likertButtons.length; i++) {
        likertButtons[i].onclick = function () {
            // clear previously selected option (if any)
            var selectedOption = document.querySelector('.likert-input-button.selected');
            if (selectedOption) {
                selectedOption.classList.remove("selected");
            }
            // mark clicked option as selected
            this.classList.add("selected");
            // call the change() function and tell it which value was selected
            change.apply({value: this.getAttribute('data-value')});
        };
    }
}
// all other appearances
else {
    // remove the select dropdown contrainer
    selectDropDownContainer.parentElement.removeChild(selectDropDownContainer);
    // remove the likert container
    likertContainer.parentElement.removeChild(likertContainer);

    // what to do when an option is selected
    var buttons = document.querySelectorAll('input[name="opt"]');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onchange = function () {
            // remove 'selected' class from a previously selected option (if any)
            var selectedOption = document.querySelector('.choice-container.selected');
            if (selectedOption) {
                selectedOption.classList.remove("selected");
            }
            // add 'selected' class to the new selected option
            this.parentElement.classList.add("selected");
            // call the change() function and tell it which value was selected
            change.apply(this);
        };
    }

    // quick appearance
    if (fieldProperties.APPEARANCE.includes("quick") === true) {
        // go through all the available choices
        var choiceContainers = document.getElementsByClassName("choice-container");
        for (var i = 0; i < choiceContainers.length; i++) {
            // add the 'appearance-quick' class
            choiceContainers[i].classList.add("appearance-quick");
            // insert the 'quick' icon
            choiceContainers[i].getElementsByClassName("choice-label-text")[0].insertAdjacentHTML('beforeend', '<svg class="quick-appearance-icon"><use xlink:href="#quick-appearance-icon" /></svg>');
        }
    }
}
