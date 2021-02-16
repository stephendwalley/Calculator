// Base Calculation Functions

function add(a, b) {
	mainDisplay.textContent = +a + +b;
	inputString = (+a + +b).toString();
}

function subtract(a, b) {
	mainDisplay.textContent = a - b;
	inputString = (a - b).toString();
}

function multiply(a, b) {
	mainDisplay.textContent = a * b;
	inputString = (a * b).toString();
}

function divide(a, b) {
	mainDisplay.textContent = Math.round((a / b) * 100) / 100;
	inputString = (Math.round((a / b) * 100) / 100).toString();
}

// Display functionality
let mainDisplay = document.querySelector("#mainDisplay");
let operatorDisplay = document.querySelector("#operatorDisplay");

function updateMainDisplay(displayNumber) {
	if (mainDisplay.textContent === "0.00") {
		mainDisplay.textContent = displayNumber;
	} else {
		mainDisplay.textContent += displayNumber;
	}

	mainDisplay.textContent = inputString;
}

//Button Functionality
let inputString = "";

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		if (button.id === "btnEqual") {
			calculateAnswer();
		} else if (button.id === "btnClear") {
			inputString = "";
			mainDisplay.textContent = "0.00";
			operatorDisplay.textContent = "";
		} else if (button.id === "btnDel") {
			removeLastInput();
		} else if (
			inputString.includes("+") ||
			inputString.includes("−") ||
			inputString.includes("×") ||
			inputString.includes("÷")
		) {
			console.log("the string already has an operator");
			console.log(inputString);

			if (
				button.textContent == "+" ||
				button.textContent == "−" ||
				button.textContent == "×" ||
				button.textContent == "÷"
			) {
				operatorDisplay.textContent += button.textContent;
				calculateAnswer();
				inputString += button.textContent;
				updateMainDisplay(button.textContent);
			} else {
				operatorDisplay.textContent += button.textContent;
				inputString += button.textContent;
				console.log(inputString);
				updateMainDisplay(button.textContent);
			}
		} else {
			if (
				button.textContent != "+" ||
				button.textContent != "−" ||
				button.textContent != "×" ||
				button.textContent != "÷"
			) {
				operatorDisplay.textContent += button.textContent;
				inputString += button.textContent;
				updateMainDisplay(button.textContent);
				console.log(inputString);
			} else {
				operatorDisplay.textContent += button.textContent;
				inputString += button.textContent;
				updateMainDisplay(button.textContent);
			}
		}
	});
});

function calculateAnswer() {
	if (inputString.includes("+")) {
		let operatorPosition = inputString.indexOf("+");
		add(
			inputString.substring(0, operatorPosition),
			inputString.substring(operatorPosition + 1)
		);
	} else if (inputString.includes("−")) {
		let operatorPosition = inputString.indexOf("−");
		subtract(
			inputString.substring(0, operatorPosition),
			inputString.substring(operatorPosition + 1)
		);
	} else if (inputString.includes("×")) {
		let operatorPosition = inputString.indexOf("×");
		multiply(
			inputString.substring(0, operatorPosition),
			inputString.substring(operatorPosition + 1)
		);
	} else if (inputString.includes("÷")) {
		let operatorPosition = inputString.indexOf("÷");
		divide(
			inputString.substring(0, operatorPosition),
			inputString.substring(operatorPosition + 1)
		);
	}
}

function removeLastInput() {
	if (inputString.length == 1) {
		console.log("string is 1 length");
		inputString = "0";
		mainDisplay.textContent = "0.00";
		operatorDisplay.textContent = operatorDisplay.textContent
			.toString()
			.slice(0, -1);
	} else {
		let removedInputString = inputString.toString().slice(0, -1);
		inputString = removedInputString;

		operatorDisplay.textContent = operatorDisplay.textContent
			.toString()
			.slice(0, -1);
		mainDisplay.textContent = mainDisplay.textContent
			.toString()
			.slice(0, -1);
	}
}

// OPERATORS − × ÷ +
