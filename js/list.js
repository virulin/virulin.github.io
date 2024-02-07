document.addEventListener("DOMContentLoaded", () => {
    const personajes = ["Rick Sánchez", "Morthy smith", "Summer smith", "Jerry smith", "Mr.poopybutthole"];
    let currentpersonajeindex = 0;

    document.querySelector(".btn.btn-primary").addEventListener("click", event => {
        const personajeToAdd = personajes[currentpersonajeindex];
        if (personajeToAdd) {
            var itemList = document.getElementById("my-list");
            var template = document.getElementById("list-template");
            var total = itemList.childElementCount + 1;
            var clone = template.content.cloneNode(true);
            clone.querySelector("[data-id='number']").textContent = `${total}`;
            clone.querySelector("[data-id='title']").textContent = personajeToAdd;
            clone.querySelector("[data-id='content']").textContent = `Description of ${personajeToAdd}`;
            itemList.appendChild(clone);

            currentpersonajeindex++;
        }
    });

    document.querySelector(".btn.btn-light").addEventListener("click", event => {
        var itemList = document.getElementById("my-list");
        currentpersonajeindex = 0;
    });
});


