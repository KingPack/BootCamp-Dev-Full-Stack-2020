window.addEventListener('load', start);

function start(){
    console.log("Aula 04");
    console.log("Pagina totalmente carregada");

    var nameInput = document.querySelector('#nameInput');
    nameInput.addEventListener('keyup', countName);

    var form = document.querySelector('form')
    form.addEventListener('submit', preventSubimit)
}

function countName(event) {
    var count = event.target.value;

    var span = document.querySelector('#nameLength');
    span.textContent = count.length;
}

function preventSubimit(event) {
    event.preventDefault()

    var nameInput = document.querySelector('#nameInput')
    alert(nameInput.value + ' cadastrado com sucesso!')
}