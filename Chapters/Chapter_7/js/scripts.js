// simple function for EventListening
function doSomething(event) {
    console.log(event.type + " was raised on " + event.target);
    console.log("screen: (" + event.screenX + ", " + event.screenY + "), page: (" + event.pageX + ", " + event.pageY + "), client: (" + event.screenX + ", " + event.screenY + ")");
    console.log(event.which);
}

addEventListener("click", doSomething);