const submitButton = document.getElementById('submit')
const guessInput = document.getElementById('guess')
const result = document.getElementById('result')

let randomNumber = Math.floor(Math.random() * 100) + 1
result.textContent = 'Enter a number 1-100'
submitButton.addEventListener('click', function () {
    let value = Number(guessInput.value)
    if (value > randomNumber)
        result.textContent = 'Your number is too big'
    if (value < randomNumber)
        result.textContent = 'Your number is too small'
    if (value == randomNumber)
    result.textContent = 'You won'
})