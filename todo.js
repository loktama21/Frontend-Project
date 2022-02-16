let addButton = document.querySelector('#addToDo');
let input = document.querySelector('#inputField');
let displayToDo = document.querySelector('.to-dos');


addButton.addEventListener('click', function(){
    let newPara = document.createElement('li');
    newPara.innerHTML = input.value;
    displayToDo.appendChild(newPara);
    input.value = '';

    newPara.addEventListener('click', function(){
        newPara.style.textDecoration = 'line-through';
    })
    newPara.addEventListener('dblclick', function(){
        displayToDo.removeChild(newPara);
    })
})