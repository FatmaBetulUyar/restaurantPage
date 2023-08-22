function createContact() {

    const menuHomeDiv = document.createElement("div");
    menuHomeDiv.textContent = "burası contact";

    return menuHomeDiv;
}

function loadContact(){
    const content = document.getElementById("content");
    const subContent = document.querySelector(".subContent");
    content.removeChild(subContent);

    content.appendChild(createContact());
}

export default loadContact;