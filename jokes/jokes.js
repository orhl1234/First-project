// const person = {
//     name: "John",
//     age: 30,
//     isEmployed: true,
//     };

const getJokeButton = document.getElementById('getJoke')
const joke = document.getElementById('joke')

getJokeButton.addEventListener('click', async function () {
    try {
    let response = await fetch('https://official-joke-api.appspot.com/random_joke')
    let data = await response.json()
    joke.innerHTML = ""
    joke.innerHTML = `
    <p><strong>Setup:</strong> ${data.setup}</p>
    <p><strong>Punchline:</strong> ${data.punchline}</p>
    `;
    }
    catch(error){
        joke.innerHTML = "try again later"
        console.error(error)
    }
})
