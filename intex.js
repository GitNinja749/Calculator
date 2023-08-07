let displayText = '';
function showDisplay(){
    document.getElementById('display').value=displayText;
}

function buttonClicked(value) {
    displayText += value;
    showDisplay();
  }

//   Button Deleting
function buttonDelete() {
    displayText = displayText.slice(0, -1);
    showDisplay();
  }
//  Button Clearing
function buttonClear(){ 
    displayText = ''; 
    showDisplay()
}
  //  Calculation
function buttonEqual(){
    var result=eval(display.value)
    display.value = result;
}
