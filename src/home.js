function createHome() {

    const homeDiv = document.createElement("div");
    homeDiv.textContent = "burası home";

    return homeDiv;
}

function loadHome(){
    const content = document.getElementById("content");
    const subContent = document.querySelector(".subContent");
    content.removeChild(subContent);

    content.appendChild(createHome());
}

export default loadHome;