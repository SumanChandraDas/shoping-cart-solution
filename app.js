
function updateProductNumber(isincrement, product, price) {
    const productInput = document.getElementById(product + '-number');
    const productInputValue = parseInt(productInput.value);

    if (isincrement == true) {
        productInput.value = productInputValue + 1;

    }
    else if (productInput.value > 0 && isincrement == false) {
        productInput.value = productInputValue - 1;
    }
    const costTotal = document.getElementById(product + '-total');
    costTotal.innerText = productInput.value * price;
}
//phone total calculation
document.getElementById('phone-plus').addEventListener("click", function () {
    updateProductNumber(true, 'phone', 1229);
})

document.getElementById('phone-minus').addEventListener("click", function () {
    updateProductNumber(false, 'phone', 1229);

})
// case total calculation
document.getElementById('case-plus').addEventListener("click", function () {
    updateProductNumber(true, 'case', 58);
})

document.getElementById('case-minus').addEventListener("click", function () {
    updateProductNumber(false, 'case', 58);
});