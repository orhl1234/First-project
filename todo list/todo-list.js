const addButton = document.getElementById('add-button')
const taskList = document.getElementById('task-list')
let localArray = JSON.parse(localStorage.getItem('task array'))  ?? []      //issue
if (localArray) {
    const newArray = localArray;
    for (let i = 0; i < newArray.length; i++) {
        const taskElement = document.createElement('li')
        taskElement.innerHTML = newArray[i].name
        if (newArray[i].isDone == true)
        {
            taskElement.style.textDecoration = "line-through"
        }
        taskList.appendChild(taskElement)
        const doneButton = document.createElement('button')
        doneButton.appendChild(document.createTextNode('Delete'))
        taskList.appendChild(doneButton)
        doneButton.addEventListener('click',function(){
            newArray[i].isDone = true
            taskElement.style.textDecoration = "line-through"
            localStorage.setItem("task array", JSON.stringify(localArray));
        })
    }
}


addButton.addEventListener('click', function () {
    let task = document.getElementById('input-task').value
    document.getElementById('input-task').value = ""
    const data = {name: task,
         isDone: false
        }
    localArray.push(data)
    localStorage.setItem("task array", JSON.stringify(localArray));
    const taskElement = document.createElement('li')
    taskElement.innerHTML = task
    taskList.appendChild(taskElement)
     const doneButton = document.createElement('button')
     doneButton.appendChild(document.createTextNode('Delete'))
     taskList.appendChild(doneButton)
     doneButton.addEventListener('click',function(){
        taskElement.style.textDecoration = "line-through"
        localArray[localArray.length-1].isDone = true 
        localStorage.setItem("task array", JSON.stringify(localArray));

    })
})


