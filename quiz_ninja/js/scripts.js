// JavaScript: Novice to Ninja 
/// dom references ///
var $question = document.getElementById("question");
var $score = document.getElementById("score");
var $feedback = document.getElementById("feedback");
var $form = document.getElementById("answer");
var $start = document.getElementById("start");
// form is hidden before start of game
hide($form);

// program refs //
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
// Event Listner
$start.addEventListener("click", function () { play(quiz), false });

// utility functions
function hide(element) {
    element.style.display = "none";
}

function show(element) {
    element.style.display = "block";
}

// main game functions 

function update(element, content, klass) {
    var p = element.firstChild || document.createElement("p");
    p.textContent = content;
    element.appendChild(p);
    if (klass) {
        p.className = klass;
    }
}


function play(quiz) {
    hide($start); // hides start button
    show($form);
    update($score, score);

    // main game loop
    var i = 0;
    // Asks the first question. Starts the game loop
    chooseQuestion();

    /* Disabled for the time being. Delete if obsolete.  
      for (var i = 0, question, answer, max = quiz.questions.length; i < max; i++) {
          question = quiz.questions[i].question;
          answer = ask(question);
          check(answer);
      }
  
      gameOver();
      // end of main game loop */

    // EventListner that checks for the users input
    $form.addEventListener("submit", function (event) {
        event.preventDefault();
        check($form[0].value);
    }, false);

    function chooseQuestion() {
        var question = quiz.questions[i].question;
        ask(question)
    }

    function ask(question) {
        update($question, quiz.question + question);
        $form[0].value = "";
        $form[0].focus();
        // return prompt(quiz.question + question);
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

        i++;
        if (i === quiz.questions.length) {
            gameOver();
        } else {
            chooseQuestion();
        }
    }

    function gameOver() {
        show($start);
        hide($form);
        // inform the player that the game has finished an tell them how many points they have scored
        update($question, "Game Over, you scored " + score + " points");
    }

}