
function updateCaseNumber(isincrement) {
    const caseInput = document.getElementById('case-number');
    const caseInputValue = parseInt(caseInput.value);

    if (isincrement == true) {
        caseInput.value = caseInputValue + 1;

    }
    else if (caseInput.value > 0 && isincrement == false) {
        caseInput.value = caseInputValue - 1;
    }
    const costTotal = document.getElementById('cost-total');
    costTotal.innerText = caseInput.value * 58;
}
document.getElementById('case-plus').addEventListener("click", function () {
    updateCaseNumber(true);
})

document.getElementById('case-minus').addEventListener("click", function () {
    updateCaseNumber(false);
});