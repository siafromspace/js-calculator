let num1 = +prompt("Enter first number:")
let num2 = +prompt("Enter second number:")
let operation = prompt("Choose a numerical operation: +, -, *, /")

if (operation === "+") {
    alert(num1 + num2)
} else if (operation === "-") {
    alert(num1 - num2)
} else if (operation === "*") {
    alert(num1 * num2)
} else if (operation === "/") {
    alert(num1 / num2)
}