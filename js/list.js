document.addEventListener("DOMContentLoaded", () => {
    // Función para agregar un nuevo item a la lista
    function addNewItem(titleText, contentText) {
        var itemList = document.getElementById("my-list");
        var template = document.getElementById("list-template");
        var total = itemList.childElementCount + 1;
        var clone = template.content.cloneNode(true);
        clone.querySelector("[data-id='number']").textContent = `${total}`;
        clone.querySelector("[data-id='title']").textContent = titleText;
        clone.querySelector("[data-id='content']").textContent = contentText;
        itemList.appendChild(clone);
    }

    // Evento click para el botón primario
    document.querySelector(".btn.btn-primary").addEventListener("click", event => {
        addNewItem("Product", "It's a new item");
    });

    // Evento click para el botón secundario
    document.querySelector(".btn.btn-light").addEventListener("click", event => {
        var itemList = document.getElementById("my-list");
        itemList.replaceChildren();
    });
});

