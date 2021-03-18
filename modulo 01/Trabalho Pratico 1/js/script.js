let inputRangeRed = null
let inputRangeGreen = null
let inputRangeBlue = null

let inputTextRed = null
let inputTextGreen = null
let inputTextBlue = null
 
let divSquare = null

window.addEventListener('load', () => {
    mapElements()
})

function mapElements() {
    inputRangeRed = document.querySelector('#inputRangeRed')
    inputRangeGreen = document.querySelector('#inputRangeGreen')
    inputRangeBlue = document.querySelector('#inputRangeBlue')

    inputTextRed = document.querySelector('#inputTexted')
    inputTextGreen = document.querySelector('#inputTextGreen')
    inputTextBlue = document.querySelector('#inputTextBlue')

    divSquare = document.querySelector('#divSquare')
    
}