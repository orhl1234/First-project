const quizData = [
    { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], correct: 0 },
    { question: "What does DOM stand for?", options: ["Document Object Model", "Data Object Model", "Document Overhead Method"], correct: 0 },
    { question: "Which language runs in a web browser?", options: ["Python", "Java", "JavaScript", "C++"], correct: 2 },
];


let currentQuestion = 0;
let score = 0;

const nextButton = document.getElementById('next-question')
const mainQuestion = document.getElementById('main-question')



mainQuestion.innerHTML = quizData[currentQuestion].question

nextButton.addEventListener('click', NextQestion)

function NextQestion() {

    if (currentQuestion < 2) {
        currentQuestion++
        mainQuestion.innerHTML = quizData[currentQuestion].question
    }
    else {
        alert('game finished')
    }
}
const options = document.querySelectorAll(".option-button");

// for (let i = 0; i < options.length; i++) {
//     options[i].addEventListener('click', optionFunction)
// }
for (option in options) {
    option.addEventListener('click', optionFunction(option))
}

function optionFunction(option) {
     if(quizData.indexOf(option) == quizData[currentQuestion].correct)
        console.log("good");    
}
