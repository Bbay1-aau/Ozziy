document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll(".bird-name");

    inputs.forEach(input => {
        input.addEventListener("change", () => {
            alert(`You named this bird: ${input.value}`);
        });
    });
});
