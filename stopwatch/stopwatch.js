const timer = document.getElementById('timer')
const resetButton = document.getElementById('resetButton')
 const stopButton = document.getElementById("stopButton");
 const resumeButton = document.getElementById("resumeButton");

let timeNow = Number(localStorage.getItem('time'))
if (isNaN(timeNow))
timeNow = 0
function addSecond() {
    timeNow += 1
    timer.textContent = timeNow.toString()
    localStorage.setItem('time', timeNow.toString())
    console.log(timeNow)
} 
 let id = setInterval(addSecond, 1000)

resetButton.addEventListener('click', function(){
    timeNow = 0
    timeNow.textContent = timeNow.toString()
    localStorage.setItem('time', '0')
})

stopButton.addEventListener('click', function(){
    clearInterval(id)
})

resumeButton.addEventListener('click', function(){
    id = setInterval(addSecond, 1000)
})


// // Select DOM elements
// const timerElement = document.getElementById("timer");
// const resetButton = document.getElementById("resetButton");
// const stopButton = document.getElementById("stopButton");


// // Retrieve the start time from localStorage or set it to the current time
// let startTime = parseInt(localStorage.getItem("startTime")) || Date.now();



// // Update the timer display
// function updateTimer() {
// const elapsedTime = Math.floor((Date.now() - startTime) / 1000); // Convert ms to seconds
// timerElement.textContent = elapsedTime;
// }

// // Start the timer interval
// const id = setInterval(updateTimer, 1000)


// // Reset button functionality
// resetButton.addEventListener("click", () => {
// startTime = Date.now(); // Reset the start time
// localStorage.setItem("startTime", startTime); // Save the reset time to localStorage
// updateTimer();
// });

// stopButton.addEventListener('click', function(){
// clearInterval(id)
// })

// // Save the start time to localStorage
// localStorage.setItem("startTime", startTime);