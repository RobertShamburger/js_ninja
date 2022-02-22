var myForm = document.getElementsByTagname('form')["search"];
console.log(toString(myForm));
var input = myForm["searchBox"];
var button = myForm["submitBtn"];


input.addEventListener("focus", function () { debugger; alert("focused") }, false);