document.addEventListener("DOMContentLoaded", () => {
    const convertText = () => {
        event.preventDefault();

        const stcInput = document.getElementById("stcInput").value.trim();
        const rootDiv = document.getElementById("root");

        rootDiv.innerHTML = stcInput === "" 
            ? `<p style="font-size:125%; font-family: 'Segoe UI', sans-serif; font-weight: 400; font-style: normal;">Error. Please Input Something</p>` 
            : `<p style="font-size:125%; font-family: 'Pacifico', cursive; font-weight: 400; font-style: normal;">${stcInput}</p>`;
    };

    document.getElementById("convertButton").addEventListener("click", convertText);
});
