function creatId(inputId) {
    const inputFeild = document.getElementById(inputId)
    const valueInText = inputFeild.value
    const value = parseFloat(valueInText)
    // inputFeild.value = ''
    // debugger;
    const error = document.getElementById('error')
    return value;
}
document.getElementById('calculate-btn').addEventListener('click', function () {
    const expenses = creatId('expenses-input')
    const rent = creatId('rent-input')
    const cloth = creatId('clothes-input')
    const income = creatId('income-input')

    if (isNaN(expenses) || isNaN(rent) || isNaN(cloth) || isNaN(income)) {

        error.style.display = "block"
    }

    else {
        if (expenses < 0 || rent < 0 || cloth < 0 || income < 0) {
            return alert('please entern positive number')
        }
        else {
            let totalAmount = document.getElementById('total-field')
            totalAmount.innerText = expenses + rent + cloth
            error.style.display = "none"
        }
    }

    let totalAmount = document.getElementById('total-field')

    if (income < totalAmount.innerText) {
        return alert('Your balance is lowest')
    }
    else {

        let balaceAmount = document.getElementById('balance-field')
        balaceAmount.innerText = income - totalAmount.innerText
    }
})
document.getElementById('save-btn').addEventListener('click', function () {
    const save = creatId('save-input')
    const savingAmount = document.getElementById('saving-field')
    const balanceAmount = document.getElementById('balance-field')
    savingAmount.innerText = save;
    const income = creatId('income-input')

    savingAmount.innerText = income * save / 100

    if (savingAmount.innerText > balanceAmount.innerText) {
        savingAmount.textContent = "You don't have enought money"
    }
    else {
        savingAmount.innerText = income * save / 100

    }

    let remainingAmount = document.getElementById('remainig-field')
    remainingAmount.innerText = balanceAmount.innerText - savingAmount.innerText
    if (savingAmount.innerText < 0) {
        remainingAmount.textContent = 'hi'
    }
    else {
        remainingAmount.innerText = balanceAmount.innerText - savingAmount.innerText
    }
})

//     if (savingAmount.innerText > balanceAmount.innerText) {
//         savingAmount.textContent = "You don't have enought money"
//     }
//     else {
//         savingAmount.innerText = income * save / 100

//     }







// function getInputValue(product) {
//     const productInput = document.getElementById(product + '-input')
//     const productNumber = productInput.value
//     const productAmount = parseInt(productNumber);
//     return productAmount;
// }

// document.getElementById('calculate').addEventListener('click', function () {
//     const income = getInputValue('income')
//     const expenses = getInputValue('expenses')
//     const rent = getInputValue('rent')
//     const cloth = getInputValue('clothes')


//     const totalAmount = document.getElementById('total-amount')

//     if (isNaN(totalAmount.innerText)) {
//         totalAmount.textContent = 'please enter valid number'

//     }

//     else if (totalAmount.innerText > 0) {
//         totalAmount.textContent = 'please enter possitive number'

//     }

//     else {
//         totalAmount.innerText = expenses + rent + cloth
//     }

//     const balanceAmount = document.getElementById('balance-amount')
//     balanceAmount.innerText = income - totalAmount.innerText
//     console.log(balanceAmount.innerText)
// })

// document.getElementById('save-btn').addEventListener('click', function () {
//     const save = getInputValue('save')
//     const savingAmount = document.getElementById('saving-amount')
//     savingAmount.innerText = save;
//     const income = getInputValue('income')

//     savingAmount.innerText = income * save / 100


//     const remainingAmount = document.getElementById('remainig-amount')
//     const balanceAmount = document.getElementById('balance-amount')
//     remainingAmount.innerText = balanceAmount.innerText - savingAmount.innerText


//     if (savingAmount.innerText > balanceAmount.innerText) {
//         savingAmount.textContent = "You don't have enought money you need"
//     }

// })



