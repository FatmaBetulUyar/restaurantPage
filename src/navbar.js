
function createDiv(className, id, textContent) {
  const menuDiv = document.createElement("div");
  menuDiv.classList.add(className);
  menuDiv.setAttribute("id", id);
  menuDiv.textContent = textContent;

  return menuDiv;
}



function navbar() {
  const content = document.getElementById("content");
  //menu
  const navbarMenu = document.createElement("div");
  navbarMenu.classList.add("navbar");

  //menu > home
  const menuHomeDiv = createDiv("menuSectionHome", "menuSectionHome", "Home");

  //menu > menu
  const menuDiv = createDiv("menuSectionMenu", "menuSectionMenu", "Menu");

  //menu > contact
  const menuContactDiv = createDiv(
    "menuSectionContact",
    "menuSectionContact",
    "Contact"
  );

  navbarMenu.appendChild(menuHomeDiv);
  navbarMenu.appendChild(menuDiv);
  navbarMenu.appendChild(menuContactDiv);


  // add subcontent to content
  content.appendChild(navbarMenu);
  
}

export default navbar;
