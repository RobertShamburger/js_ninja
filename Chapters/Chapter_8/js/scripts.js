myForm = document.getElementsByTagname('form')["search"];
input = myForm["searchBox"];
button = myForm["submitBtn"];

debugger;
input.addEventListener("focus", function () { debugger; alert("focused") }, false);