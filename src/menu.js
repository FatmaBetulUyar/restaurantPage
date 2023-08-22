function createMenu() {
  const menuDiv = createElement("div", "menu");

  //header
  const headerDiv = createElement("div", "headerDiv");
  headerDiv.setAttribute("id", "headerMenu");
  const menuHeader = createElement("h2", "menuHeader");
  menuHeader.textContent = "La Saveur";

  const menuHeaderText = createElement("p", "menuHeaderText");
  menuHeaderText.textContent = "The Traditional Fench Taste";

  headerDiv.appendChild(menuHeader);
  headerDiv.appendChild(menuHeaderText);

  //container
  const containerDiv = createElement("div", "container");

  const card = createMenuCard(
    "https://images.pexels.com/photos/3026803/pexels-photo-3026803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "Breakfast/Eggs",
    "Délicieux Bénédicte",
    "Eggs Benedict with hollandaise sauce, crispy bacon and an assortment of garden herbs.",
    "$56"
  );

  const card2 = createMenuCard(
    "https://images.pexels.com/photos/1543800/pexels-photo-1543800.jpeg?auto=compress&cs=tinysrgb&w=800",
    "Breakfast/Eggs",
    "Délicieux Bénédicte",
    "Eggs Benedict with hollandaise sauce, crispy bacon and an assortment of garden herbs.",
    "$56"
  );

  const card3 = createMenuCard(
    "https://images.pexels.com/photos/1120464/pexels-photo-1120464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "Breakfast/Eggs",
    "Délicieux Bénédicte",
    "Eggs Benedict with hollandaise sauce, crispy bacon and an assortment of garden herbs.",
    "$56"
  );

  const card4 = createMenuCard(
    "https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=800",
    "Breakfast/Eggs",
    "Délicieux Bénédicte",
    "Eggs Benedict with hollandaise sauce, crispy bacon and an assortment of garden herbs.",
    "$56"
  );

  const card5 = createMenuCard(
    "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
    "Breakfast/Eggs",
    "Délicieux Bénédicte",
    "Eggs Benedict with hollandaise sauce, crispy bacon and an assortment of garden herbs.",
    "$56"
  );

  const card6 = createMenuCard(
    "https://images.pexels.com/photos/1407346/pexels-photo-1407346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "Breakfast/Eggs",
    "Délicieux Bénédicte",
    "Eggs Benedict with hollandaise sauce, crispy bacon and an assortment of garden herbs.",
    "$56"
  );

  containerDiv.appendChild(card6);
  containerDiv.appendChild(card5);
  containerDiv.appendChild(card);
  containerDiv.appendChild(card3);
  containerDiv.appendChild(card4);
  containerDiv.appendChild(card2);

  menuDiv.appendChild(headerDiv);
  menuDiv.appendChild(containerDiv);
  return menuDiv;
}
const createMenuCard = (image, mealType, title, text, price) => {
  const cardDiv = createElement("div", "card");
  const cardImageDiv = createElement("div", "card-image");
  const cardImage = createElement("img", "image");
  cardImage.src = image;

  cardImageDiv.appendChild(cardImage);
  cardDiv.appendChild(cardImageDiv);

  const cardTextDiv = createElement("div", "card-text");
  const cardMealTypeDiv = createElement("p", "card-meal-type");
  cardMealTypeDiv.textContent = mealType;
  const cardTitleDiv = createElement("h2", "card-title");
  cardTitleDiv.textContent = title;
  const cardBodyDiv = createElement("p", "card-body");
  cardBodyDiv.textContent = text;

  cardTextDiv.appendChild(cardMealTypeDiv);
  cardTextDiv.appendChild(cardTitleDiv);
  cardTextDiv.appendChild(cardBodyDiv);

  cardDiv.appendChild(cardTextDiv);

  const cardPriceDiv = createElement("div", "card-price");
  cardPriceDiv.textContent = price;

  cardDiv.appendChild(cardPriceDiv);

  return cardDiv;
};
const createElement = (element, classList) => {
  const item = document.createElement(element);
  item.classList.add(classList);

  return item;
};

function loadMenu() {
  const subContent = document.getElementById("subContent");
  //content.removeChild(subContent);
  // Bu fonksiyon içinde homeDiv oluşturulmalı

  const homeDiv = createMenu();
  subContent.appendChild(homeDiv);
}

export default loadMenu;
