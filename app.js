
let resultDiv = document.querySelector('.result')
const btnAdd = document.querySelector('.add-task');
const btnClear = document.querySelector('.clear-task');
let taskList = [];





const addTask = () => {

    
    let taskInput = document.querySelector('input');
    taskList.push(taskInput.value)
    console.log(taskList);
    resultDiv.innerHTML += `<li>${taskInput.value}</li>`;

};

const clearTask = () => {
    resultDiv.innerHTML = '';
    taskList = [];
    console.log('taskList cleared')
}




btnAdd.addEventListener("click", addTask)
btnClear.addEventListener("click", clearTask)






