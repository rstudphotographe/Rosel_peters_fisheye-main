import getDataPhotographers from "./service.js";

  //recuperer et inserer l'id du photographe
  const currentId = document.location.href.split("=")[1];
  console.log('currentId',currentId);
  //variable
  const infophotographe = document.querySelector(".container_info")
  const thisphotographer = [];
  
  //stocker les données
    const {photographers, medias} = await getDataPhotographers();
    
  //recuperer les données d'un photographe et les médias
  const getThisPhotographer = () => {
  photographers.forEach(photographer => {
    if(photographer.id == currentId){
      thisphotographer.push(photographer)
      console.log("thisphotographer",...thisphotographer);
    }
  });
}
getThisPhotographer();

//Afficher les infos du photographe dans html
const displayPhotographerInfo = () => {
    infophotographe.innerHTML = thisphotographer.map(photographer => `
    <div class="info_photograph">
    <h1 class="name">${photographer.name}</h1>
      <p class="city_photographer">${photographer.city}, ${photographer.country}</p>
      <p class="tag_photographer">${photographer.tagline}</p>
      </div>
      <button class="contact_button" id="contact" onclick="displayModal()">Contactez-moi</button>

      <img class="img_photographer" src="assets/Photographers/Photographers_ID_Photos/${photographer.portrait}" alt="photo du photographe">
   ` )
}
displayPhotographerInfo()

// //let container = document.querySelector('container_info');

//   //container.innerHTML = medias.map(photographe =>  
//   //<h1 class="name">${photographe.name}</h1>
//   <p class="city_photographer">${photographe.city}</p>
//   <p class="tag_photographer">${photographe.tagLine}</p>
//   <img class="img_photographer" src="assets/Photographers/Photographers_ID_Photos/${portrait}" alt="photo du photographe">
//  </div>
    
//  )


// Replace ./data.json with your JSON feed
