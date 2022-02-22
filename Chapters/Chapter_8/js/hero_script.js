var form = document.forms.hero;
form.addEventListener("submit", makeHero, false);
form.powers[1].checked = true;
function makeHero(event) {
    event.preventDefault(); // prevents submit action

    var hero = {};
    hero.name = form.name.value; // create a name property basedd on the input field's value
    hero.realName = form.realName.value;

    hero.powers = [];

    for (i = 0; i < form.powers.length; i++) {
        if (form.powers[i].checked)
            hero.powers.push(form.powers[i].value);
    }

    for (i = 0; i < form.alignment.length; i++) {
        if (form.alignment[i].checked) {
            hero.alignment = form.alignment[i].value;
            break;
        }
    }
    alert(JSON.stringify(hero)); // converts object to string and displays it in alert
}