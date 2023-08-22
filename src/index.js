/* import _ from 'lodash';

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component()); */

import loadContact from "./contact";
import loadHome from "./home";
import loadMenu from "./menu";

import navbar from "./navbar";


document.addEventListener("DOMContentLoaded", function () {
  navbar();

  const home = document.getElementById("menuSectionHome");
  const menu = document.getElementById("menuSectionMenu");
  const contact = document.getElementById("menuSectionContact");
  const subContent = document.getElementById("subContent");
  const subContentHome= document.getElementById("homeDiv");

  home.addEventListener("click", () => {
    console.log("tiklandi");
    loadHome();
  });

  menu.addEventListener("click", () => {
    console.log("tiklandi");
    loadMenu();
    //reset();
  });
  contact.addEventListener("click", () => {
    console.log("tiklandi");
    loadContact();
   // reset();
  });

  const reset = ()=>{
    subContent.innerHTML="";
  }
});
