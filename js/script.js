function getInputValue(product) {
    const productInput = document.getElementById(product + '-input')
    const productNumber = productInput.value
    const productAmount = parseInt(productNumber);
    return productAmount;

}

document.getElementById('calculate').addEventListener('click', function () {
    const income = getInputValue('income')
    const expenses = getInputValue('expenses')
    const rent = getInputValue('rent')
    const cloth = getInputValue('clothes')

    const totalAmount = document.getElementById('total-amount')
    if (isNaN(totalAmount)) {
        alert('please type number')
    }
    else if (totalAmount > 0) {
        alert('please send positive number')
    }

    totalAmount.innerText = expenses + rent + cloth
    console.log(totalAmount.innerText)

    const balanceAmount = document.getElementById('balance-amount')
    balanceAmount.innerText = income - totalAmount.innerText
    console.log(balanceAmount.innerText)
})


