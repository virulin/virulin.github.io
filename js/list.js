document.addEventListener("DOMContentLoaded", () => {
    const personajes  =["monito1", "monito2", "monito3", "monito4", "monito5",];
    let currentpersonajeindex = 0;
    
    document.querySelector(".btn.btn-primary").addEventListener("click", event => {
        const personajeToAdd = personajes [currentpersonajeindex];
        if (personajeToAdd){
        var itemList = document.getElementById("my-list");
        var template = document.getElementById("list-template");
        var total = itemList.childElementCount + 1;
        var clone = template.content.cloneNode(true);
        clone.querySelector("[data-id='number']").textContent = `${total}`;
        clone.querySelector("[data-id='title']").textContent = personajeToAdd;
        clone.querySelector("[data-id='content']").textContent = `Description of (personajeToAdd)`;
        itemList.appendChild(clone);

            currentCharacterIndex++;
    });
    document.querySelector(".btn.btn-light").addEventListener("click", event => {
        var itemList = document.getElementById("my-list");
        itemList.personajeindex = 0;
    });
});

