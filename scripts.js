const container = document.querySelector("#container");
const button = document.querySelector(".btn");

function createGrid(size) {
    container.innerHTML = "";
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-item");

        div.style.flex = `1 0 calc(100% / ${size})`;
        div.style.height = `calc(100% / ${size})`;
    
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "lightblue";
        });
        container.appendChild(div);
    }
};

createGrid(16);

button.addEventListener("click", () => {
    let gridSize = prompt("Enter a number: ");

    while(Number(gridSize) > 100 || gridSize.trim() === "" || isNaN(gridSize)) {
        gridSize = prompt("Please enter a number less or equal to 100: ");
    }
    createGrid(Number(gridSize));
});


