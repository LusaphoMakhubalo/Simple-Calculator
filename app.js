let equal_pressed = 0;

// Accessing all buttons, except for "C" & "DEL"
let button_input = document.querySelectorAll(".input-button");

// Accessing input, clear & erase
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () => {
    input.value = "";
};

// Accessing classes using the "forEach" method
button_input.forEach(button => {
    button.addEventListener("click", () => {
        input.value += button.value;
    });
});

// Implementing clear button functionality
clear.addEventListener("click", () => {
    input.value = "";
});

// Implementing erase button functionality
erase.addEventListener("click", () => {
    input.value = input.value.slice(0, -1);
});

// Implementing equal button functionality
equal.addEventListener("click", () => {
    const result = eval(input.value);
    input.value = result;
});
