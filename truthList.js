document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("submit").addEventListener("click", (event) => {
        event.preventDefault();

        const truthInput = document.getElementById("truthInput").value
        const rootDiv = document.getElementById("root");

        const options = {
            "carrot sticks": () => "actually french fries but dipped in orange juice",
            "nutella sticks": () => "It wasn't nutella.",
            "school waffle fries": () => "really just deep fried tennis rackets",
            "green sauce": () => "it's actually alien slime!",
            "juice": () => "we really need to bring down apple cruelty",
            "nachos": () => "you could hardly call it 'cheese'",
            "pizza": () => "made from recycled cardboard and homemade cheese (just expired milk)",
            "dihydrogen monoxide": () => "probably has a ton of lead in it, don't drink it",
            "school bathroom": () => "it's a warzone in there, and half of the soldiers are on their phones"
        };

        const display = options[truthInput]();

        rootDiv.innerHTML = `
            <p style="font-size:125%;"><strong>${display}</strong></p>
        `;
    });
});
