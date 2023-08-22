document.addEventListener("DOMContentLoaded", function () {
  const content = document.getElementById("content");

  //menu
  const navbar = document.createElement("div");
  navbar.classList.add("navbar");

  //menu > home
  const menuHomeDiv = document.createElement("div");
  menuHomeDiv.classList.add("menuSection");
  menuHomeDiv.setAttribute('id','menuSectionHome')
  menuHomeDiv.textContent="Home";

  //menu > menu
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menuSection");
  menuHomeDiv.setAttribute('id','menuSectionMenu')
  menuDiv.textContent="Menu";

  //menu > contact
  const menuContactDiv = document.createElement("div");
  menuContactDiv.classList.add("menuSection");
  menuHomeDiv.setAttribute('id','menuSectionContact')
  menuContactDiv.textContent="Contact";

  navbar.appendChild(menuHomeDiv);
  navbar.appendChild(menuDiv);
  navbar.appendChild(menuContactDiv);

  //subcontent
  const subContent = document.createElement("div");
  subContent.classList.add("subContent");

  //subcontent > imageDiv
  const imageDiv = document.createElement("div");
  imageDiv.classList.add("restaurantImage");

  //subcontent > imageDiv > img
  const image = document.createElement("img");
  image.classList.add("headerImg");
  image.src =
    "https://cdn.pixabay.com/photo/2018/03/24/16/08/cake-3257019_1280.jpg";
  image.alt = "headerImg";
  image.srcset = "";

  imageDiv.appendChild(image);

  //subcontent > header
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header");

  //subcontent > header > h1
  const header = document.createElement("h1");
  header.textContent = "betul's bakery";

  headerDiv.appendChild(header);

  //subcontent > about
  const aboutDiv = document.createElement("div");
  aboutDiv.classList.add("aboutText");

  //subcontent > about > p
  const aboutText = document.createElement("p");
  aboutText.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dignissimos consequuntur odio in et corrupti vero ipsam perspiciatis tempora temporibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt possimus soluta hic consequuntur exercitationem ipsum, natus dipiscioluptatibus magni quaerat provident eaque itaque cupiditate doloribus iure ratione, unde esse?";

  aboutDiv.appendChild(aboutText);

  // add all to subcontent
  subContent.appendChild(imageDiv);
  subContent.appendChild(header);
  subContent.appendChild(aboutDiv);

  // add subcontent to content
  content.appendChild(navbar);
  content.appendChild(subContent);

});
