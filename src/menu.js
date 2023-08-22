function createMenu() {

    const menuHomeDiv = document.createElement("div");
    menuHomeDiv.textContent = "menu";

    return menuHomeDiv;
}

function loadMenu(){
    const content = document.getElementById("content");
    const subContent = document.querySelector(".subContent");
    content.removeChild(subContent);

    content.appendChild(createMenu());
}

export default loadMenu;