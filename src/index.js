/* import _ from 'lodash';

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component()); */

import  main  from "../dist/main"
import loadContact from "./contact";
import loadHome from "./home";
import loadMenu from "./menu"


document.addEventListener("DOMContentLoaded", function () {
const home = document.getElementById("menuSectionHome");
const menu = document.getElementById("menuSectionMenu");
const contact = document.getElementById("menuSectionContact");

 //menu click events
  home.addEventListener("click", ()=>{
    console.log("tiklandi");
    loadHome();
  }) 

  menu.addEventListener("click", ()=>{
    console.log("tiklandi");
    loadMenu();
  })

  contact.addEventListener("click", ()=>{
    console.log("tiklandi");
    loadContact();
  })

})