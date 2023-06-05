let equal_pressed = 0;

//Accessing all buttons, except for "C"&"DEL"

let button_input = document.querySelectorAll(".input-button");

//Accessing input, clear & erase
let input = document.getElementById("input");

let input = document.getElementById("equal");

let input = document.getElementById("clear");

let input = document.getElementById("earse");

window.onload = () =>{
    input.value = "";;
}

//Accessing classes using the "forEach" method
button_input.