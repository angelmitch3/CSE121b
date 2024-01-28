/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1 - number2;
};

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

/* Open Function Use - Divide Numbers */
function divide(dividend, divisor) {
    return dividend / divisor;
}

/* Using function expressions, define another function named divideNumbers that gets the values of two HTML form controls with IDs of dividend and divisor. */
const divideNumbers = function() {
    const dividend = parseInt(document.getElementById("dividend").value);
    const divisor = parseInt(document.getElementById("divisor").value);
    const quotient = divide(dividend, divisor);
    document.getElementById("quotient").value = quotient;
};

/* Add a "click" event listener to the HTML button with an ID of divideNumbers that calls the divideNumbers function. This line of code is NOT located inside a function because it needs to be executed immediately when the page loads. */
document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Add an event listener for the Get Total Due button when clicked that invokes the following functionality: */
document.getElementById("getTotalDue").addEventListener("click", () => {
    /* Declare and instantiate a variable that stores the numeric value entered by the user in the subtotal field. */
    const subtotal = parseFloat(document.getElementById("subtotal").value);

    /* Check IF the membership checkbox has been checked by the user to apply a 20% discount to the subtotal amount. */
    const membershipCheckbox = document.getElementById("membership");
    const discount = membershipCheckbox.checked ? subtotal * 0.2 : 0;

    /* Output the total to the total span in the format shown with two decimals using a template string. */
    const total = (subtotal - discount).toFixed(2);
    document.getElementById("total").textContent = `$${total}`;
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Using arrow functions, define another function named multiplyNumbers that gets the values of two HTML form controls with IDs of factor1 and factor2. */
const multiplyNumbers = () => {
    const number1 = parseInt(document.getElementById("factor1").value);
    const number2 = parseInt(document.getElementById("factor2").value);
    const product = multiply(number1, number2);
    document.getElementById("product").value = product;
};

/* Add a "click" event listener to the HTML button with an ID of multiplyNumbers that calls the multiplyNumbers function. This line of code is NOT located inside a function because it needs to be executed immediately when the page loads. */
document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);
