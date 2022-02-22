//var form = document.getElementsByTagname('form')["search"];
var form = document.getElementById("search");
var input = form.elements["searchBox"];
var button = form.elements["submitBtn"];


input.addEventListener("focus", function(){debugger; alert("focused")}, false);