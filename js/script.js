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

    totalAmount.innerText = expenses + rent + cloth
    // console.log(totalAmount.innerText)

    const balanceAmount = document.getElementById('balance-amount')
    balanceAmount.innerText = income - totalAmount.innerText
    console.log(balanceAmount.innerText)
})

document.getElementById('save-btn').addEventListener('click', function () {
    const save = getInputValue('save')
    const savingAmount = document.getElementById('saving-amount')
    savingAmount.innerText = save;
    const income = getInputValue('income')
    savingAmount.innerText = income * save / 100



    const remainingAmount = document.getElementById('remainig-amount')
    const balanceAmount = document.getElementById('balance-amount')
    remainingAmount.innerText = balanceAmount.innerText - savingAmount.innerText

})


