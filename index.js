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

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		console.log(button.id);
	});
});

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

// Display functionality

function modifyDisplay(inputText) {
	let displayText = document.querySelector("#display");
	displayText.childNode.textContent = inputText;
	return;
}

