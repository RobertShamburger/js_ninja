var form = document.forms.hero;
form.addEventListener("submit", makeHero, false);

function makeHero(event) {
    event.preventDefault(); // prevents submit action

    var hero = {};
    hero.name = form.name.value; // create a name property basedd on the input field's value

    alert(JSON.stringify(hero)); // converts object to string and displays it in alert
}