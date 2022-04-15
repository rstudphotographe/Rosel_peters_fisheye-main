import getDataPhotographers from "./service.js";

//recuperer et inserer l'id du photographe
const currentId = Number(document.location.href.split("=")[1]);

//stocker les données
const {photographers, medias} = await getDataPhotographers();

  
//recuperer les données d'un photographe 
const onePhotographe = photographers.filter(photographer => currentId === photographer.id)[0];

//variable pour sélectionner un element html
const infophotographe = document.querySelector(".photograph-header");

//Afficher les infos dans  photographer.html
const displayPhotographerInfo = () => {
    infophotographe.innerHTML =  `
    <div class="info_photograph">
      <h1 class="name">${onePhotographe.name}</h1>
      <p class="city_photographer">${onePhotographe.city}, ${onePhotographe.country}</p>
      <p class="tag_photographer">${onePhotographe.tagline}</p>
    </div>
      <button class="contact_button" id="contact" onclick="displayModal()">Contactez-moi</button>
      <img class="img_photographer" src="assets/Photographers/Photographers_ID_Photos/${onePhotographe.portrait}" alt="photo du photographe">
      ` 
}
displayPhotographerInfo()

// active la factory des médias
const allMedia = new Media(medias, onePhotographe)

const getThisMedias = () => {
  medias.forEach(media => {
      if(media.photographerId == currentId){
          medias.push(media);          
      }
  });
};
getThisMedias();

//recupération et création html
//const gallery = document.querySelector ('.container_gallery')

//const displayMediaPhotographe = () => {
//gallery.innerHTML = thisMedia.map(media =>
  // `  <article>
    //  <img class="asset_photographer" src='assets/images/Sample_Photos/${thisPhotographer[0].name.split(' ')[0]}/${media.image}'/>            
      //<div class="info_media">
        //  <span class = "title_media">${media.title}</span>
          //<div class= "container_like">
            //   <p class = "number_like"> ${media.likes}</p>
              //  <i class="fas fa-heart"></i>
          //</div>
      //</div>
  //</article>

//`).join('');
//}
//displayMediaPhotographe();
