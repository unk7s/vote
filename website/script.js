const submitBtn = document.getElementById("submitBtn");
const resultElement = document.getElementById("result");

submitBtn.addEventListener("click", () => {
    const selectedOption = document.querySelector("input[name='vote']:checked");
    if (selectedOption) {
        const optionValue = selectedOption.value;
        resultElement.textContent = `Vous avez voté pour : ${optionValue}`;
    } else {
        resultElement.textContent = "Veuillez sélectionner une option avant de soumettre.";
    }
});
