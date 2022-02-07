// welcome the user
alert("welcome to Quiz Ninja");

/*var question = "What is Superman's real name?"
var answer = prompt(question);
alert("You answered: " + answer);
 */

var quiz = [
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonderwoman's real name?", "Diana Prince"],
    ["What is Batman's real name?", "Bruce Wayne"]
];

var score = 0;

for (var i = 0, max = quiz.length; i < max; i++) {
    // get answer from user
    var answer = prompt(quiz[i][0]);
    if (answer === quiz[i][1]) { // quiz[i][1] is the i-th answer
        alert("Correct!");
        // increase score by 1
        score++;
    } else {
        alert("Wrong!");
    }

}

alert("Game Over, you scored " + String(score) + " points");
