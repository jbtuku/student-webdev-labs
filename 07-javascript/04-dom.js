// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

let userinput = document.querySelector("#userInput1");
let copy = document.querySelector("#copy");
let output = document.querySelectorAll(".output");

// add an event listener on the target element
copy.addEventListener("click", handleclick);

// callback function to handle event
function handleclick(event) {
  output[0].textContent = userinput.value;
}

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
let userinput2 = document.querySelector("#userInput2");

// add an event listener on the target element
userinput2.addEventListener("input", handleInput);

let element = document.createElement("div");
let section = document.querySelector("#inputEventExample");
section.append(element);

// callback function to handle event
function handleInput(event) {
  element.textContent = userInput2.value;
}
