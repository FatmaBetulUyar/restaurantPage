/* import _ from 'lodash';

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component()); */

import loadContact from "./contact";
import createContent from "./content";
import loadHome from "./home";
import loadMenu from "./menu";

import navbar from "./navbar";

document.addEventListener("DOMContentLoaded", function () {
  navbar();
  createContent();
  const home = document.getElementById("menuSectionHome");
  const menu = document.getElementById("menuSectionMenu");
  const contact = document.getElementById("menuSectionContact");
  const subContent = document.getElementById("subContent");

  home.addEventListener("click", () => {
    reset();
    createContent();
    console.log("tiklandi");
    loadHome();
  });

  menu.addEventListener("click", () => {
    reset();
    createContent();
    console.log("tiklandi");
    loadMenu();
    //reset();
  });
  contact.addEventListener("click", () => {
    reset();
    createContent();
    console.log("tiklandi");
    loadContact();
  });

  const reset = () => {
    subContent.innerHTML = "";
  };
});
