const submitBtn = document.querySelector('.submit')
const inputs = document.querySelectorAll('.input')
const formulario = document.querySelector('form')

formulario.addEventListener("submit", (form) => {
    form.preventDefault()
})

inputs.forEach(element => {
    submitBtn.addEventListener('click', () => {
        if (element.value === "") {
            element.classList.remove('preenchido')
            element.classList.add('erro')
            element.nextElementSibling.classList.remove('none')
        } else {
            element.classList.add('preenchido')
            element.classList.remove('erro')
            element.nextElementSibling.classList.add('none')
        }
    })
});