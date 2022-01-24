// JavaScript, unlike Java, does not need to create a class to store methods
// JS syntax is similar to Java, but is dynamically typed(similar to python)

// Declaring Global Elements
var div1; // var = variable; can be of any type
let button2;
var buttonClassElements;


function initiliazeElements(){

    // Different ways of obtaining HTML elements and storing them in variables: "getElementById()", "querySelector()"

    div1 = document.getElementById("first-div"); // button of type var(stands for variable) can store any datatype
    button2 = document.querySelector("#unique-button"); // Retrieves the first occurrence of the HTML element with "id" value of "unique-button"
    button2ID = document.getElementById("unique-button") // Retrieves the HTML element with "id" of "unique-button"; returns the same value as the previous line
     
    
    // To get buttons to call functions when clicking them, there are two ways of doing so:
    //Method 1: Add an Event Listener
    button2.addEventListener("mousedown", function(){
        console.log("Method 1")
    })
}

//Method 2: Create a new function that will be called via HTML
function callButton2(){ // Syntax for declaring a Js Function/method; this method will be called via HTML
    console.log("Method 2");
}