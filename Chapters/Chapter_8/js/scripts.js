var myForm = document.getElementsByTagName("form")[0];
var input = myForm["searchBox"];
var button = myForm["submitBtn"];

input.addEventListener("click", function(){console.log("Does the click event work work?")});
console.log("Does anything work?");

input.addEventListener("focus", function () { debugger; alert("focused") }, false);