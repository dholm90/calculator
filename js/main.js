// Query Selectors

const body = document.querySelector('body');
const wrapper = document.querySelector('.wrapper');
const container = document.querySelector('.container');
const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.btn');

// Operation Functions
const add = function (a, b) {
    return a + b;
};
const subtract = function (a, b) {
    return a - b;
};
const multiply = function (a, b) {
    return a * b;
};
const divide = function (a, b) {
    return a / b;
};
const operate = function (a, b, op) {
    let result;
    switch (op) {
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = subtract(a, b);
            break;
        case "x":
            result = multiply(a, b);
            break;
        case "/":
            result = divide(a, b);
            break;

        default:
            break;
    }
    return result;
}

let a;
let b;
let c;
let op;
let runningTotal = 0;
let total;
let display;
let temp = [];

// Button Event Listeners
buttons.forEach(btn => {
    btn.addEventListener('click', function handleClick(event) {
        let input = btn.innerText;
        //Switch statement for inputs
        switch (input) {
            case "1":
                temp.push(input);
                //updateDisplay();
                break;
            case "2":
                temp.push(input);
                break;
            case "3":
                temp.push(input);
                break;
            case "4":
                temp.push(input);
                break;
            case "5":
                temp.push(input);
                break;
            case "6":
                temp.push(input);
                break;
            case "7":
                temp.push(input);
                break;
            case "8":
                temp.push(input);
                break;
            case "9":
                temp.push(input);
                break;
            case "0":
                temp.push(input);
                break;
            case "+":
                if (!a) {
                    a = parseInt(temp.join(""), 10);
                } else {
                    c = parseInt(temp.join(""), 10);
                    runningTotal = operate(a, c, "+");
                    a = runningTotal;
                }
                temp = [];
                op = "+";
                break;
            case "-":
                if (!a) {
                    a = parseInt(temp.join(""), 10);
                } else {
                    c = parseInt(temp.join(""), 10);
                    runningTotal = operate(a, c, "-");
                }
                //console.log(a);
                temp = [];
                op = "-";
                break;
            case "x":
                if (!a) {
                    a = parseInt(temp.join(""), 10);
                } else {
                    c = parseInt(temp.join(""), 10);
                    runningTotal = operate(a, c, "x");
                }
                //console.log(a);
                temp = [];
                op = "x";
                break;
            case "/":
                if (!a) {
                    a = parseInt(temp.join(""), 10);
                } else {
                    c = parseInt(temp.join(""), 10);
                    runningTotal = operate(a, c, "/");
                }
                //console.log(a);
                temp = [];
                op = "/";
                break;
            case "=":
                b = parseInt(temp.join(""), 10);
                total = operate(a, b, op);
                op = "";
                console.log(total);


                break;
            case "C":
                a = 0;
                b = 0;
                c = 0;
                op = "";
                temp = [];
                runningTotal = 0;
                total = 0;
                break;
            default:
                break;
        }
        updateDisplay();
        //console.log(btn.innerText);
    });
});

const updateDisplay = function () {
    if (!total) {
        display = parseInt(temp.join(""), 10);
    } else if (total) {
        display = total;
        total = "";

    }
    screen.innerText = display;
}
// Input funtions
