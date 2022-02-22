// JavaScript: Novice to Ninja 
/// dom references ///
var $question = document.getElementById("question");
var $score = document.getElementById("score");
var $feedback = document.getElementById("feedback");
// view functions
function update(element, content, klass) {
    var p = element.firstChild || document.createElement("p");
    p.textContent = content;
    element.appendChild(p);
    if(klass) {
        p.className = klass;
    }
}

// Event Listner
$start.addEventListener("click", function(){ play(quiz), false});

// program refs //
var $start = document.getElementById("start");
var quiz = {
    "name": "Super Hero Name Quiz",
    "description": "How many super heroes can you name?",
    "question": "What is the real name of ",
    "questions": [
        { "question": "Superman", "answer": "Clark Kent" },
        { "question": "Wonder Woman", "answer": "Diana Prince" },
        { "question": "Batman", "answer": "Bruce Wayne" }
    ]
}

var score = 0;

//play(quiz);

function play(quiz) {
    update($score, score);
    // main game loop
    for (var i = 0, question, answer, max = quiz.questions.length; i < max; i++) {
        question = quiz.questions[i].question;
        answer = ask(question);
        check(answer);
    }

    // end of main game loop
    gameOver();

    function ask(question) {
        update($question, quiz.question + question);
        return prompt(quiz.question + question);
    }

    function check(answer) {
        if (answer === quiz.questions[i].answer) {
            update($feedback, "Correct!", "right");
            // increase score by 1
            score++;
            update($score, score);
        } else {
            update($feedback, "Wrong!", "wrong");
        }
    }

    function gameOver() {
        // inform the player that the game has finished an tell them how many points they have scored
        update($question, "Game Over, you scored " + score + " points");
    }

}