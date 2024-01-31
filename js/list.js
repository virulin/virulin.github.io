document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".btn.btn-primary").addEventListener("click", event => {
        addNewItem("Product", "It's a new item");
    });

    document.querySelector(".btn.btn-light").addEventListener("click", event => {
        var itemList = document.getElementById("my-list");
        itemList.replaceChildren();
    });
});

function addNewItem(titleText, contentText) {
    // Crear un nuevo elemento li
    const newItem = document.createElement("li");
    newItem.classList.add("item");

    // Añadir el contenido
    const title = document.createElement("h3");
    title.textContent = titleText;

    const content = document.createElement("p");
    content.textContent = contentText;

    // Agregar el contenido al nuevo elemento li
    newItem.appendChild(title);
    newItem.appendChild(content);

    // Obtener la lista y agregar el nuevo elemento
    var itemList = document.getElementById("my-list");
    itemList.appendChild(newItem);
}

