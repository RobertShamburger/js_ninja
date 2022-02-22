var myForm = document.forms["search"];
var input = myForm["searchBox"];
var button = myForm["submitBtn"];

debugger;
input.addEventListener("focus", function () { debugger; alert("focused") }, false);