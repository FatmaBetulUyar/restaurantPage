function createDiv(className, id) {
  const menuDiv = document.createElement("div");
  menuDiv.classList.add(className);
  menuDiv.setAttribute("id", id);

  return menuDiv;
}

const createContent = () => {
  const content = document.getElementById("content");
  //subcontent
  const subContent = createDiv("subContent", "subContent");

  content.appendChild(subContent);
};
export default createContent;
