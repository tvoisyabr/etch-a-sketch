const container = document.querySelector("#container");
const button = document.querySelector(".btn");

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(size) {
    container.innerHTML = "";
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-item");

        div.style.flex = `1 0 calc(100% / ${size})`;
        div.style.height = `calc(100% / ${size})`;
        div.style.opacity = 0.1;
    
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = getRandomColor();
            let currentOpacity = parseFloat(div.style.opacity);
            if (currentOpacity < 1) {
                div.style.opacity = currentOpacity + 0.1;
            }
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


