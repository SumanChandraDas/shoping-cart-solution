document.getElementById('case-plus').addEventListener("click", function () {
    const caseInput = document.getElementById("case-number");
    const caseInputValue = parseInt(caseInput.value);
    caseInput.value = caseInputValue + 1;
    console.log("caseInput.value");
})