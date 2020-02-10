// Find the input element
var buttons =
document.querySelectorAll('input[name="opt"]');

// Define what happens when the user attempts to clear the response
function clearAnswer() {
    document.querySelector('input[name="opt"]:checked').checked = false;
}

// Save the user's response (update the current answer)
function change(){
  setAnswer(this.value);
}

// When a button is pressed, call the change() function and tell it which button was pressed.
for(var i = 0; i < buttons.length; i++){
  buttons[i].onchange = change;
}

