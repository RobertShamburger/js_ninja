// First paragraph
var click = document.getElementById("click");
click.addEventListener("mousedown", function () { console.log("down") })
click.addEventListener("click", function () { console.log("click") })
click.addEventListener("mouseup", function () { console.log("up") })

// Second paragraph
var dblclick = document.getElementById("dblclick");
dblclick.addEventListener("dblclick", highlight);

function highlight(event) {
    event.target.classList.toggle("highlight");
}

// Third paragraph
var mouse = document.getElementById("mouse");
mouse.addEventListener("mouseover", highlight);
mouse.addEventListener("mouseout", highlight);
mouse.addEventListener("mousemove", function () { console.log("You moved the mouse!") });

// Key press evnt
addEventListener("keydown", function (event) {
    highlight(event);
    if (event.keyCode == 32 && event.ctrlKey) {
        console.log("Action cancelled?");
    }
});
addEventListener("keyup", function stop(event) {
    var date = new Date;
    console.log("You stopped pressing the key " + String.fromCharCode(event.keyCode) + " on " + date);
});
addEventListener("keypress", function (event) { console.log("You pressed the " + String.fromCharCode(event.charCode) + " character.") });

/*addEventListener("keydown", 
});*/

addEventListener("click", function (event) {
    if (event.shiftKey) {
        console.log("A Shifty Click!");
    }
});

//==========================================================




//==========================================================
//==========================================================
// simple function for EventListening
/*function doSomething(event) {
    console.log(event.type + " was raised on " + event.target);
    console.log("screen: (" + event.screenX + ", " + event.screenY + "), page: (" + event.pageX + ", " + event.pageY + "), client: (" + event.screenX + ", " + event.screenY + ")");
    console.log(event.which);
}

addEventListener("click", doSomething); */