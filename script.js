const paragraph = document.querySelector("#calc")
const decimal = document.querySelector("#decimal");
let operator = "";
let numbers = "";
let decimalStop = false;
let num1 = "";
let num2 = "";

const add = (a, b) => {
    operator = "";
    return paragraph.innerText = Number(a) + Number(b);
}

const subtract = (a, b) => {
    operator = "";
    return paragraph.innerText = Number(a) - Number(b);
}

const multiply = (a, b) => {
    operator = "";
    return paragraph.innerText = Math.round((Number(a) * Number(b)) * 10) / 10;
}

const divide = (a, b) => {
    operator = "";
    if (a / b === Infinity) {
        return paragraph.innerText = "Dividing by 0. Original."
    }
    return paragraph.innerText = Math.round((Number(a) / Number(b)) * 10 ) / 10;
}

const operate = (operator, [a, b]) => {
    a = Number(a);
    b = Number(b);
    switch(operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}

const displayNumbers = (e) => {
    if (e.target.value === ".") {
        paragraph.innerText += e.target.value;
        decimal.classList.add("disabled");
    } else {
        paragraph.innerText += e.target.value;
    }
}

const delNumber = () => {
    let lastString = paragraph.innerText[paragraph.innerText.length-1]
    if (lastString === ".") {
        decimal.classList.remove("disabled");
    } else if (lastString === "+" || lastString === "-" || lastString === "/") {
        decimal.classList.add("disabled");
    }
    paragraph.innerText = paragraph.innerText.slice(0, paragraph.innerText.length-1);
}

const clearDisplay = () => {
    paragraph.innerText = "";
    operator = "";
    numbers = "";
    decimal.classList.remove("disabled");
}

const stringToNum = () => {
    numbers = paragraph.innerText.split(operator);
    operate(operator, numbers)
}

const storeOperator = (e) => {
    if (!operator) {
        operator = e.target.value;
        paragraph.innerText += operator;
    } else {
        stringToNum();
        operator = e.target.value;
        paragraph.innerText += operator;
    }
    decimal.classList.remove("disabled");
}

// document.addEventListener("keydown", (e) => {
//     console.log(e.code);
//     switch(e.code) {
//         case "Numpad0":
//             paragraph.innerText += "0";
//             break;
//         case "Numpad1":
//             paragraph.innerText += "1";
//             break;
//         case "Numpad2":
//             paragraph.innerText += "2";
//             break;
//         case "Numpad3":
//             paragraph.innerText += "3";
//             break;
//         case "Numpad4":
//             paragraph.innerText += "4";
//             break;
//         case "Numpad5":
//             paragraph.innerText += "5";
//             break;
//         case "Numpad6":
//             paragraph.innerText += "6";
//             break;
//         case "Numpad7":
//             paragraph.innerText += "7";
//             break;
//         case "Numpad8":
//             paragraph.innerText += "8";
//             break;
//         case "Numpad9":
//             paragraph.innerText += "9";
//             break;
//         case "NumpadDivide":
//             operator = "/"
//             num1 = paragraph.innerText;
//             paragraph.innerText = "";
//             decimal.classList.remove("disabled");
//             break;
//         case "NumpadMultiply":
//             operator = "*"
//             num1 = paragraph.innerText;
//             paragraph.innerText = "";
//             decimal.classList.remove("disabled");
//             break;
//         case "NumpadSubtract":
//             operator = "-"
//             num1 = paragraph.innerText;
//             paragraph.innerText = "";
//             decimal.classList.remove("disabled");
//             break;
//         case "NumpadAdd":
//             operator = "+"
//             num1 = paragraph.innerText;
//             paragraph.innerText = "";
//             decimal.classList.remove("disabled");
//             break;
//         case "NumpadEnter":
//             num2 = paragraph.innerText;
//             operate(operator, [num1, num2])
//             decimal.classList.remove("disabled");
//             break;
//         case "NumpadDecimal":
//             if (paragraph.innerText.includes(".")) return false;
//             paragraph.innerText += ".";
//             decimal.classList.add("disabled");
//             break;
//         case "Backspace":
//             if (paragraph.innerText[paragraph.innerText.length-1] === ".") {
//                 decimal.classList.remove("disabled");
//             }
//             paragraph.innerText = paragraph.innerText.slice(0, paragraph.innerText.length-1);
//             break;

//     }
// })
