
window.addEventListener('load', start);

function start(){
    console.log('Aula 04');
    console.log('página totalmente carregada');

    
    var nameInput = document.querySelector('#nameInput');
    nameInput.addEventListener('keyup', countName);
    
}

function countName(event) {
    console.log(event)  
    var count = event.target.value

    var span = document.querySelector('#nameLength');
    span.textContent = count.length;
}