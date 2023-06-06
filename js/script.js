const inputPay = document.querySelector('#price')
const inputPeople = document.querySelector('#people')
const tipMenu = document.querySelector('#tip')
const countBtn = document.querySelector('.count')
const errorInfo = document.querySelector('.error')
const costInfo = document.querySelector('.cost-info')
const cost = document.querySelector('.cost')

const checkValue = () => {
    if (inputPay.value == '' || inputPeople.value == '' || tipMenu.value == 0) {
        errorInfo.textContent = 'Uzupełnij wszystkie pola!'
        costInfo.style.display = 'none'
    } else {
        errorInfo.textContent = ''
        countTip()
    }
}

const countTip = () => {
   
    const price = parseFloat(inputPay.value)
    const people = parseInt(inputPeople.value)
    const tip = parseFloat(tipMenu.value)

    const sum = (price + price * tip) / people
    costInfo.style.display = 'block'
    cost.textContent = sum.toFixed(2)
}

countBtn.addEventListener('click', checkValue)
