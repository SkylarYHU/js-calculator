const display = document.getElementById("display");

function appendToDisplay(input){
  display.value += input
}

function clearDisplay(){
  display.value = ""
}

function calculate(){
  try{
    if (display.value && !/[\+\-\*\/]$/.test(display.value)) {
      display.value = eval(display.value);
    } else {
      display.value = "Error";
    }
  }
  catch(error){
    display.value = "Error";
  }
}