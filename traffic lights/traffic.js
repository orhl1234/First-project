const lights = [
    { element: document.getElementById("redLight"), duration: 3000 },
    { element: document.getElementById("yellowLight"), duration: 1000 },
    { element: document.getElementById("greenLight"), duration: 2000 }
];



let currentLight = 0;

function lightOff(light, index) {
    light.element.classList.remove('active')
}
function changeLight() {
    lights.forEach(lightOff)
    lights[currentLight].element.classList.add('active')
    currentLight = (currentLight + 1) % lights.length;
    setTimeout(changeLight,lights[currentLight].duration)
}
changeLight()