var form = document.getElementsByTagName("form")[0];
var input = form["searchBox"];

input.value = "Enter Search Term here";
var button = form["submitBtn"];

//input.addEventListener("focus", function () { alert("focused") }, false);
//input.addEventListener("blur", function () { alert("blurred") }, false);
input.addEventListener("change", function () { alert("changed") }, false);
form.addEventListener("submit", function (event) { search(event) }, false);
// Empty input field on focus
input.addEventListener("focus", function() {
    if (input.value === "Enter Search Term here") {
        input.value = "";
    }
}, false);
// Fill input field with default text on focus loss
input.addEventListener("blur", function() {
    if (input.value = "") {
        input.value = "Enter Search Term here";
    }
}, false);

function search(event) {
    //debugger;
    if (input.value !== "Enter Search Term here") {
        alert("You Searched for: " + input.value);
        event.preventDefault();
    }
}