import { photographerFactory } from "../factories/photographer.js";
import getPhotographers from "./service.js";

// Données récupérées dans le json avec une fonction asynchrone 
const getMedia = [];
const thisPhotographer = [];


//selectionne chaque photographe
 async function displayData() {
    const {photographers} = await getPhotographers();
    const photographersSection = document.querySelector(".photographer_section");
    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
//        console.log(userCardDOM);
        photographersSection.appendChild(userCardDOM);
  });
    
}
displayData()

