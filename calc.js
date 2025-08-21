document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("calc-button").addEventListener("click", (event) => {
        event.preventDefault();

        const numOne = Number(document.getElementById("numberOne").value);
        const op = document.getElementById("op").value;
        const numTwo = Number(document.getElementById("numberTwo").value);
        const rootDiv = document.getElementById("root");

        const operations = {
            "x": (a, b) => a * b,
            "÷": (a, b) => (a !== 0 && b !== 0) ? a / b : "Error. Cannot divide by 0.",
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
        };

        const display = operations[op](numOne, numTwo);

        rootDiv.innerHTML = `
            <p style="font-size:125%;"><strong>${display}</strong></p>
            ${typeof display === "number" ? `<br><p>${numOne} ${op} ${numTwo} = ${display}</p>` : ""}
        `;
    });
});
