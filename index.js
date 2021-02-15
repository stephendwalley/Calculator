// Base Calculation Functions

function add(a, b) {
	mainDisplay.textContent = +a + +b;
	inputString = +a + +b;
}

function subtract(a, b) {
	mainDisplay.textContent = a - b;
	inputString = a - b;
}

function multiply(a, b) {
	mainDisplay.textContent = a * b;
	inputString = a * b;
}

function divide(a, b) {
	mainDisplay.textContent = Math.round((a / b) * 100) / 100;
	inputString = Math.round((a / b) * 100) / 100;
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
		} else {
			operatorDisplay.textContent += button.textContent;
			inputString += button.textContent;
			console.log(inputString);

			if (
				button.textContent == "+" ||
				button.textContent == "−" ||
				button.textContent == "×" ||
				button.textContent == "÷"
			) {
				console.log("button is an operator");
				return;
			} else {
				updateMainDisplay(button.textContent);
			}
		}
	});

	function calculateAnswer() {
		if (inputString.includes("+")) {
			let operatorPosition = inputString.indexOf("+");
			console.log(inputString.substring(0, operatorPosition));
			console.log(inputString.substring(operatorPosition + 1));
			add(
				inputString.substring(0, operatorPosition),
				inputString.substring(operatorPosition + 1)
			);
		} else if (inputString.includes("−")) {
			let operatorPosition = inputString.indexOf("−");
			console.log(inputString.substring(0, operatorPosition));
			console.log(inputString.substring(operatorPosition + 1));
			subtract(
				inputString.substring(0, operatorPosition),
				inputString.substring(operatorPosition + 1)
			);
		} else if (inputString.includes("×")) {
			let operatorPosition = inputString.indexOf("×");
			console.log(inputString.substring(0, operatorPosition));
			console.log(inputString.substring(operatorPosition + 1));
			multiply(
				inputString.substring(0, operatorPosition),
				inputString.substring(operatorPosition + 1)
			);
		} else if (inputString.includes("÷")) {
			let operatorPosition = inputString.indexOf("÷");
			console.log(inputString.substring(0, operatorPosition));
			console.log(inputString.substring(operatorPosition + 1));
			divide(
				inputString.substring(0, operatorPosition),
				inputString.substring(operatorPosition + 1)
			);
		}
	}
});

// OPERATORS − × ÷ +
