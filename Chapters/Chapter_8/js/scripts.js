var form = document.getElementsByTagName("form")[0];
var input = form["searchBox"];
var button = form["submitBtn"];

//input.addEventListener("focus", function () { alert("focused") }, false);
//input.addEventListener("blur", function () { alert("blurred") }, false);
input.addEventListener("change", function () { alert("changed") }, false);
form.addEventListener("submit", function(event) {search(event)}, false);

function search(event) {
    //debugger;
    alert("You Searched for: " + input.value);
    event.preventDefault();
    
}