function createMenu() {

    const menuHomeDiv = document.createElement("div");
    menuHomeDiv.textContent("deneme");

    return menuHomeDiv;
}

function loadMenu(){
    const content = document.getElementById("content");
    content.innerHTML = "";

    const menuHomeDiv = document.createElement("div");
    menuHomeDiv.textContent("deneme");
    content.appendChild(menuHomeDiv);
}

export default loadMenu;