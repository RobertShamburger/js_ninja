var form = document.getElementsByTagname('form')["search"];
var input = form.elements["searchBox"];
var button = form.elements["submitBtn"];


button.addEventListener("focus", function () { debugger; alert("focused") }, false);