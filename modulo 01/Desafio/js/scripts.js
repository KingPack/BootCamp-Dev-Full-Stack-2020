window.addEventListener('load', start)

var globalNames = ['Um', 'Dois', 'Tres', 'Quatro'];
var inputName = null;

function start() {
    inputName = document.querySelector('#inputName')

    preventFormSubmit()
    activateInput()
    render()

}

function preventFormSubmit() {
    function handleFormSubmit(event) {
        event.preventDefault()
    }

    var form = document.querySelector('form')
    form.addEventListener('submit', handleFormSubmit)
}

function activateInput() { 
    function insertName(newName) {
        globalNames.push(newName)
        render()
    }

    function handleTyping(event) {
        if (event.key === 'Enter'){
            insertName(event.target.value)
        }
    }

    inputName.addEventListener('keyup', handleTyping)
    inputName.focus()
}

function render() {
    function createDeleteButton(index) {
        function deleteName() {
            globalNames.splice(index, 1);
            render();
        }
      
        var button = document.createElement('button')
        button.classList.add('deleteButton')
        button.textContent = 'X';
        button.addEventListener('click', deleteName);
        return button; 
    }

    function createSpan(name) {
        function editItem(){
            inputName.value = name
            }
        var span = document.createElement('span');
        span.classList.add('clickable')
        span.textContent = name;
        span.addEventListener('click', editItem)
        
        return span
    }

    var divNames = document.querySelector('#names');
    divNames.innerHTML='';

    var ul = document.createElement('ul');


    for (var i = 0; i < globalNames.length; i++) {
        var currentName = globalNames[i];

        var li = document.createElement('li')
        var button = createDeleteButton(i);
        var span = createSpan(currentName);
        

        li.appendChild(button);
        li.appendChild(span);
        ul.appendChild(li);
    }

    divNames.appendChild(ul);
    clearInput();
    
}

function clearInput() {
    inputName.value = '';
    inputName.focus();
}