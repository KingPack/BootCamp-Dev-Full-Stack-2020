window.addEventListener('load', start)

var globalNames = ['Um', 'Dois', 'Tres', 'Quatro'];
var inputName = null;
var isEditing = false;

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
            if(isEditing) {
            }
            else {
                insertName(event.target.value)
            }

            isEditing = false;
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
            inputName.focus()
            isEditing = true
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