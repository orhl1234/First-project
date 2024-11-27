const counterButton = document.getElementById('counterButton')
const counter = document.getElementById('counter')

let localStorageCounter = Number(localStorage.getItem('counter')) 
if (isNaN(localStorageCounter))
localStorageCounter = 0
counter.textContent = localStorageCounter

counterButton.addEventListener('click', function(){
    localStorageCounter++
    counter.textContent = localStorageCounter
    localStorage.setItem('counter',localStorageCounter.toString())
})

counter.addEventListener('mouseover', function(){
    localStorageCounter = 0
    counter.textContent = localStorageCounter
    localStorage.setItem('counter',localStorageCounter.toString())

})

function largestSwap() { 
    let text = "How are you doing today?";
    const string = text.split(" ").join("")
    console.log(string)
}
largestSwap()