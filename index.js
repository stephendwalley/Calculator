// Base Calculation Functions

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

// Display functionality
let display = document.querySelector("#display");

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		modifyDisplay(button.textContent);
		console.log(button.id);
	});
});

function modifyDisplay(input) {
	if (display.textContent === "0.00") {
		console.log("it is 0!");
		display.textContent = input;
	} else {
		console.log("it is not 0!");
		display.textContent += input;
	}
}

// Operation of calculator to call functions when equal is pressed
function operate(a, b, operator) {
	if (operator === add) {
		add(a, b);
	} else if (operator === subtract) {
		subtract(a, b);
	} else if (operator === multiply) {
		multiply(a, b);
	} else if (operator === divide) {
		divide(a, b);
	}
}
