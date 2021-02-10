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
	let displayText = document.querySelector("#display")
	displayText.childNode.textContent = inputText;
	return;
}






// Button functionality

// Button Readings for Numbers
let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {
	console.log("1 is pressed");
});
let btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
	console.log("2 is pressed");
});
let btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () => {
	console.log("3 is pressed");
});
let btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", () => {
	console.log("4 is pressed");
});
let btn5 = document.querySelector("#btn5");
btn5.addEventListener("click", () => {
	console.log("5 is pressed");
});
let btn6 = document.querySelector("#btn6");
btn6.addEventListener("click", () => {
	console.log("6 is pressed");
});
let btn7 = document.querySelector("#btn7");
btn7.addEventListener("click", () => {
	console.log("7 is pressed");
});
let btn8 = document.querySelector("#btn8");
btn8.addEventListener("click", () => {
	console.log("8 is pressed");
});
let btn9 = document.querySelector("#btn9");
btn9.addEventListener("click", () => {
	console.log("9 is pressed");
});
let btn0 = document.querySelector("#btn0");
btn0.addEventListener("click", () => {
	console.log("0 is pressed");
});

//Button Readings for Operators
let btnAdd = document.querySelector("#btnAdd");
btnAdd.addEventListener("click", () => {
	console.log("btnAdd is pressed");
});

let btnSubtract = document.querySelector("#btnSubtract");
btnSubtract.addEventListener("click", () => {
	console.log("btnSubtract is pressed");
});

let btnMultiply = document.querySelector("#btnMultiply");
btnMultiply.addEventListener("click", () => {
	console.log("btnMultiply is pressed");
});

let btnDivide = document.querySelector("#btnDivide");
btnDivide.addEventListener("click", () => {
	console.log("btnDivide is pressed");
});

let btnEqual = document.querySelector("#btnEqual");
btnEqual.addEventListener("click", () => {
	console.log("btnEqual is pressed");
});

let btnClear = document.querySelector("#btnClear");
btnClear.addEventListener("click", () => {
	console.log("btnClear is pressed");
});


