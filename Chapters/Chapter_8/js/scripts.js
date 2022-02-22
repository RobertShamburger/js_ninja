var myForm = document.getElementsByTagName("form")[0];
//var input = myForm["searchBox"];
var input = myForm.elements[0];
//var button = myForm["submitBtn"];
var button = myForm.elements[1];

debugger;
input.addEventListener("focus", function () { debugger; alert("focused") }, false);