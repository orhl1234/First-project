const quizData = [
    { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], correct: 0 },
    { question: "What does DOM stand for?", options: ["Document Object Model", "Data Object Model", "Document Overhead Method"], correct: 0 },
    { question: "Which language runs in a web browser?", options: ["Python", "Java", "JavaScript", "C++"], correct: 2 },
];


let currentQuestion = 0;
let score = 0;

const nextButton = document.getElementById('next-question')
const mainQuestion = document.getElementById('main-question')
const options = document.querySelectorAll(".option-button");



mainQuestion.innerHTML = quizData[currentQuestion].question

nextButton.addEventListener('click', NextQestion)

function NextQestion() {

    if (currentQuestion < 2) {
        currentQuestion++
        mainQuestion.innerHTML = quizData[currentQuestion].question
    }
    else {
        alert('game finished. your score is ' + score)
    }

    options.forEach(function (option, index) {
        option.textContent = quizData[currentQuestion].options[index]
    })
}


options.forEach(function (option, index) {
    option.textContent = quizData[currentQuestion].options[index]
    option.addEventListener('click', () => optionFunction(index))
})

function optionFunction(index) {
    if (index == quizData[currentQuestion].correct) {
        score++
        alert("correct")
    }
    else {
        alert("wrong")
    }
}
