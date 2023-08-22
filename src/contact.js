function createContact() {

    const menuHomeDiv = document.createElement("div");
    menuHomeDiv.textContent = "burası contact";

    return menuHomeDiv;
}

function loadContact(){
    const subContent = document.getElementById("subContent");
    //content.removeChild(subContent);
    // Bu fonksiyon içinde homeDiv oluşturulmalı
  
    const homeDiv = createContact();
    subContent.appendChild(homeDiv);
}

export default loadContact;