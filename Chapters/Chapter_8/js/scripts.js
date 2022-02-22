var $myForm = document.getElementsByTagName("form")[0];
var $input = $myForm["searchBox"];
var $button = $myForm["submitBtn"];
var para = document.getElementById("mainParagraph");

$input.addEventListener("click", function () { console.log("Does the click event work work?") });
console.log("Does anything work?");

$input.addEventListener("focus", function () { alert("focused") }, false);

para.addEventListener("click", function () { console.log("The paragraph was clicked") });