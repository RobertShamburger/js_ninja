// JavaScript: Novice to Ninja 

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

play(quiz);

function play(quiz) {
    // main game loop
    for (var i = 0, question, answer, max = quiz.questions.length; i < max; i++) {
        question = quiz.questions[i].question;
        answer = ask(question);
        check(answer);
    }

    // end of main game loop
    gameOver();

    function ask(question) {
        return prompt(quiz.question + question);
    }

    function check(answer) {
        if (answer === quiz.question[i].answer) {
            alert("Correct!");
            // increase score by 1
            score++;
        } else {
            alert("Wrong?");
        }
    }

    function gameOver() {
        // inform the player that the game has finished an tell them how many points they have scored
        alert("Game Over, you scored " + score + " points");
    }

}