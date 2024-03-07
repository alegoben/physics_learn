// JavaScript code interacting with HTML
/*const homeButtons = document.getElementsByClassName('homeButton');
const othersButtons = document.getElementsByClassName('othersButton');

for (let i = 0; i < homeButtons.length; i++) {
  homeButtons[i].addEventListener('click', function() {
    // No action needed as it stays on the same page
  });
}

for (let i = 0; i < othersButtons.length; i++) {
  othersButtons[i].addEventListener('click', function() {
    // Redirect to the "others.html" page
    window.location.href = 'others.html';
  });
}*/

// script.js
// script.js

const quizContainer = document.querySelector('.quiz-container');
const submitBtn = document.querySelector('.submit-btn');

let questionCounter = 0;
let selectedOption = null;

const questions = [
    {
        question: "What is the capital of France?",
        answers: {
            a: "Paris",
            b: "London",
            c: "Berlin"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the capital of Germany?",
        answers: {
            a: "Paris",
            b: "Berlin",
            c: "London"
        },
        correctAnswer: "b"
    }
];

function generateQuiz(question, answers, correctAnswer) {
    const output = [];

    output.push('<div class="question">', question, '</div>');
    output.push('<div class="options">');

    for (let letter in answers) {
        output.push('<input type="radio" name="question' + questionCounter + '" value="' + letter + '">',
                    '<label>' + letter + ') ' + answers[letter] + '</label><br>');
    }

    output.push('</div>');

    quizContainer.innerHTML = output.join('');
}

function showQuestion() {
    const currentQuestion = questions[questionCounter];
    const answers = currentQuestion.answers;
    const correctAnswer = currentQuestion.correctAnswer;

    generateQuiz(currentQuestion.question, answers, correctAnswer);
}

function checkAnswer() {
    const answerContainers = quizContainer.querySelectorAll('.options');
    const selector = 'input[name=question' + questionCounter + ']:checked';
    const userAnswer = (answerContainers.querySelector(selector) || {}).value;

    if (userAnswer === questions[questionCounter].correctAnswer) {
        alert('Correct!');
    } else {
        alert('Incorrect. Try again!');
    }
}

submitBtn.addEventListener('click', function() {
    checkAnswer();
    questionCounter++;
    if (questionCounter < questions.length) {
        showQuestion();
    } else {
        alert('Quiz completed!');
    }
});

showQuestion();

