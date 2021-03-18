let inputRangeRed = null
let inputRangeGreen = null
let inputRangeBlue = null

let inputTextRed = null
let inputTextGreen = null
let inputTextBlue = null
 
let divSquare = null

let r = '0'
let g = '0'
let b = '0'

window.addEventListener('load', () => {
    mapElements()
    syncDiv()
})

function mapElements() {
    inputRangeRed = document.querySelector('#inputRangeRed')
    inputRangeGreen = document.querySelector('#inputRangeGreen')
    inputRangeBlue = document.querySelector('#inputRangeBlue')

    inputTextRed = document.querySelector('#inputTextRed')
    inputTextGreen = document.querySelector('#inputTextGreen')
    inputTextBlue = document.querySelector('#inputTextBlue')

    divSquare = document.querySelector('#divSquare')

    inputRangeRed.addEventListener('change', handleInputRangeChange)
    inputRangeGreen.addEventListener('change', handleInputRangeChange)
    inputRangeBlue.addEventListener('change', handleInputRangeChange)    
    
}
function handleInputRangeChange(event) {
    const value = event.target.value
    const id = event.target.id

    switch (id) {
        case "inputRangeRed": r = value; break
        case "inputRangeGreen": g = value; break
        case "inputRangeBlue": b = value; break
    }
    syncDiv();
}

function syncDiv(){
    divSquare.style.backgroundColor = `rgb(${r},${g},${b})`

    inputTextRed.value = r
    inputTextGreen.value = g
    inputTextBlue.value = b
    
}