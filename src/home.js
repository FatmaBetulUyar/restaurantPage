function createImage(src, classList, alt) {
  const image = document.createElement("img");
  image.classList.add(classList);
  image.src = src;
  image.alt = alt;
  image.srcset = "";
  return image;
}

function createH1(textContent) {
  const h1Div = document.createElement("h1");
  h1Div.textContent = textContent;

  return h1Div;
}

function createP(className, textContent) {
  const pDiv = document.createElement("p");
  pDiv.classList.add(className);
  pDiv.textContent = textContent;
  return pDiv;
}

const elementCreate = (e, className) => {
  const element = document.createElement(e);
  element.classList.add(className);
  return element;
};

function createHome() {
  const homeDiv = document.createElement("div");
  homeDiv.setAttribute("id", "homeDiv");
  //subcontent > imageDiv
  const imageDiv = elementCreate("div", "restaurantImage");

  //subcontent > imageDiv > img
  const image = createImage(
    "https://cdn.pixabay.com/photo/2018/03/24/16/08/cake-3257019_1280.jpg",
    "headerImg",
    "header"
  );
  imageDiv.appendChild(image);

  //subcontent > header
  const headerDiv = elementCreate("div", "header");

  //subcontent > header > h1
  const header = createH1("betul's bakery");

  headerDiv.appendChild(header);

  //subcontent > about
  const aboutDiv = elementCreate("div", "aboutDiv");

  //subcontent > about > p
  const aboutText = createP(
    "aboutText",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dignissimos consequuntur odio in et corrupti vero ipsam perspiciatis tempora temporibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt possimus soluta hic consequuntur exercitationem ipsum, natus dipiscioluptatibus magni quaerat provident eaque itaque cupiditate doloribus iure ratione, unde esse?"
  );

  aboutDiv.appendChild(aboutText);

  // add all to subcontent
  homeDiv.appendChild(imageDiv);
  homeDiv.appendChild(headerDiv);
  homeDiv.appendChild(aboutDiv);

  return homeDiv;
}

function loadHome() {
  const subContent = document.getElementById("subContent");

  const homeDiv = createHome();
  subContent.appendChild(homeDiv);
}
export default loadHome;
