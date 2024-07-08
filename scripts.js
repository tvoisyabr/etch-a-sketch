const container = document.querySelector("#container");

for (let i = 0; i < 16 * 16; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-item");

    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "lightblue";
    });
    container.appendChild(div);
}