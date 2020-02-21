// Find the input element
var buttons = document.querySelectorAll('input[name="opt"]');
var choiceContainers = document.getElementsByClassName("choice-container");

// Define what happens when the user attempts to clear the response
function clearAnswer() {
    document.querySelector('input[name="opt"]:checked').checked = false;
}

// Save the user's response (update the current answer)
function change(){
  setAnswer(this.value);
  // If the appearance is 'quick', then also progress to the next field
  if ( fieldProperties.APPEARANCE.includes("quick") == true ) {
    goToNextField();
  }
}

// When a button is pressed, call the change() function and tell it which button was pressed.
for(var i = 0; i < buttons.length; i++){
  buttons[i].onchange = change;
}

// quick appearance
if ( fieldProperties.APPEARANCE.includes("quick") == true ) {
  // go through all the available choices
  window.onload = function() {
    for(var i = 0; i < choiceContainers.length; i++){
      // add the 'appearance-quick' class
      choiceContainers[i].classList.add("appearance-quick");
      // insert the 'quick' icon
      choiceContainers[i].getElementsByClassName("choice-label-text")[0].insertAdjacentHTML('beforeend','<svg class="quick-appearance-icon"><use xlink:href="#quick-appearance-icon" /></svg>');
    }
  }
} 

// minimal appearance
if ( fieldProperties.APPEARANCE.includes("minimal") == true ) {
  // find the select dropdwon element
  var selectChoices = document.getElementById("select-dropdown-container");
  // hide the default radio buttons
  document.getElementById("radio-buttons-container").style.display = "none";
  // show the select dropdown
  selectChoices.style.display = "block";
  // 'set answer' must be handled slightly differently
  selectChoices.onchange = change;
  // 'clear answer' must be handled slightly differently
  function clearAnswer() {
    selectChoices.value = "";
  }
  // if there is already a selected choice, set the current value to that choice
  window.onload = function() {
    
  }
} 
