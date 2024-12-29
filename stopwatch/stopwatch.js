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

