function createMenu() {

    const menuHomeDiv = document.createElement("div");
    menuHomeDiv.textContent = "menu";

    return menuHomeDiv;
}

function loadMenu(){

    const subContent = document.getElementById("subContent");
    //content.removeChild(subContent);
    // Bu fonksiyon içinde homeDiv oluşturulmalı
  
    const homeDiv = createMenu();
    subContent.appendChild(homeDiv);
}

export default loadMenu;