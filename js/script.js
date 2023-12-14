const inputPay = document.querySelector('#price')
const inputPeople = document.querySelector('#people')
const tipMenu = document.querySelector('#tip')
const countBtn = document.querySelector('.count')
const errorInfo = document.querySelector('.error')
const costInfo = document.querySelector('.cost-info')
const cost = document.querySelector('.cost')

const checkValue = () => {
    if (inputPay.value == '' || inputPeople.value == '' || tipMenu.value == 0) {
        costInfo.style.visibility = 'hidden'
        errorInfo.style.visibility = 'visible'
    } else {
        errorInfo.style.visibility = 'hidden'
        countTip()
    }
}

const countTip = () => {
   
    const price = parseFloat(inputPay.value) // zwraca liczbę po przecinku
    const people = parseInt(inputPeople.value) // zwraca liczbę całkowitą
    const tip = parseFloat(tipMenu.value)

    const sum = (price + price * tip) / people
    costInfo.style.visibility = 'visible'
    cost.textContent = sum.toFixed(2)
}

countBtn.addEventListener('click', checkValue)
