let isDarkMode = localStorage.getItem('darkMode') ==='true'
console.log(typeof(isDarkMode))

if (isDarkMode)
{
    setDarkMode()
}
else{
    setLightMode()
}

console.log(isDarkMode)
const button = document.getElementById('dark-mode')
button.addEventListener('click', toggleDarkMode)


function toggleDarkMode(){
    if (!isDarkMode)
    {
        setDarkMode()
    }
    else{
        setLightMode()
    }
}

function setDarkMode(){
    document.body.style.backgroundColor = "#1D2A35"
    localStorage.setItem('darkMode', true)
    isDarkMode = true
}

function setLightMode(){
    document.body.style.backgroundColor = "white"
    localStorage.setItem('darkMode', false)
    isDarkMode = false

}


// // Set data
// localStorage.setItem('key', 'value');



// // Get data
// const value = localStorage.getItem('key');



// // Remove data
// localStorage.removeItem('key');



// // Clear all data
// localStorage.clear();