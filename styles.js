const checkBox = document.querySelector('.checkbox')
const titleElement = document.querySelector('.title')
const selectElement = document.querySelectorAll('#select')
const inputElement = document.querySelectorAll('.input')
const btnElement = document.querySelector('button')
const valueConvert = document.querySelector('.text')
const arrowIcon = document.querySelector('#icon')

console.log(checkBox)


checkBox.addEventListener('change', () => {
    document.body.classList.toggle('light')

    valueConvert.classList.toggle('light')

    titleElement.classList.toggle('light')

    arrowIcon.classList.toggle('light')

    btnElement.classList.toggle('light')

    selectElement.forEach(element => {
        element.classList.toggle('light')
    });

    inputElement.forEach(element => {
        element.classList.toggle('light')
    });
})


