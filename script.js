const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const togleButton = document.getElementById('toggle')
const imgs = document.querySelectorAll('.carousel img')
let currentIndex = 0
let isPlaying = false

function updateIndex(currentIndex) {
    function indexHandler(img, i) {
        if (i == currentIndex) {
            img.classList.toggle("active", true)
        }
        else {
            img.classList.toggle("active", false)

        }
    }
    imgs.forEach(indexHandler)
}

function nextImg() {
    if (currentIndex == imgs.length - 1)
        currentIndex = 0
    else
        currentIndex++
    updateIndex(currentIndex)
}
function prvImg() {
    if (currentIndex == 0)
        currentIndex = imgs.length - 1
    else
        currentIndex--
    updateIndex(currentIndex)
}
function toggleCarusel() {
    if (!isPlaying) {
        isPlaying = true
        togleButton.textContent = 'Pause'
        playCarusel()
    }
    else {
        isPlaying = false
        togleButton.textContent = 'Play'
        stopCarusel()
    }
}
let interval
function playCarusel() {
    interval = setInterval(nextImg, 2000)
}

function stopCarusel() {
    clearInterval(interval)
}

togleButton.addEventListener('click', toggleCarusel)

nextButton.addEventListener('click', nextImg)
prevButton.addEventListener('click', prvImg)


