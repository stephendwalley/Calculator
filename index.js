// Base Calculation Functions

function add(a, b) {
	console.log(a + b);
	inputArray = [a + b];
}

function subtract(a, b) {
	console.log(a - b);
	inputArray = [a - b];
}

function multiply(a, b) {
	console.log(a * b);
	inputArray = [a * b];
}

function divide(a, b) {
	console.log(Math.round((a / b) * 100) / 100);
	inputArray = [Math.round((a / b) * 100) / 100];
	
}

//Button Functionality

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		if (button.id === "btnEqual") {
			saveInput();
			refreshDisplay(...inputArray);
		} else if (button.id === "btnClear") {
			inputArray = [];
			display.textContent = "0.00";
		} else {
			modifyDisplay(button.textContent);
			inputArray.push(button.textContent);
			saveInput();
	};
});


// Using an array to save all the inputed values from the calculator. Then split the array into specific parts based on where the operator comes. When equals is pressed array is cleared and replaced with the solution.

let inputArray = [];

// Can use index of to find the position of the operator within the string and then split the string into 3 parts including the first, second number and operator
function saveInput(); {
	let numberString = inputArray.toString().substring()
}

// function saveInput() {
// 	let numberString = inputArray
// 		.toString()
// 		.replaceAll("+", " + ")
// 		.replaceAll("−", " − ")
// 		.replaceAll("×", " × ")
// 		.replaceAll("÷", " ÷ ")
// 		.replaceAll(",", "");
// 	let adjustedArray = numberString.split(" ");

// 	// Removes the blank elements in the array due to the split on the spaces after operators.
// 	let filteredArray = adjustedArray.filter(Boolean);

// 	console.log(filteredArray);
// 	console.log(filteredArray.length);

// 	if (filteredArray.length <= 3) {
// 		refreshDisplay(inputArray.join("").toString());
// 	} else if (filteredArray.length > 3) {
// 		operate.apply(this, filteredArray);
// 		console.log("Weird...");
// 	}
// }

function operate(a, operator, b) {
	if (operator === "+") {
		add(parseFloat(a), parseFloat(b));
	} else if (operator === "−") {
		subtract(a, b);
	} else if (operator === "×") {
		multiply(a, b);
	} else if (operator === "÷") {
		divide(a, b);
	} else {
		console.log("error");
	}
}


// Display functionality
let display = document.querySelector("#display");

function refreshDisplay(input) {
	display.textContent = input;
}

function modifyDisplay(input) {
	if (display.textContent === "0.00") {
		display.textContent = input;
	} else {
		display.textContent += input;
	}
}


// OPERATORS − × ÷ +
