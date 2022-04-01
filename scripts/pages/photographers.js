import getDataPhotographers from "./service.js";

  //recuperer et inserer l'id du photographe
  const currentId = document.location.href.split("=")[1];
  console.log('currentId',currentId);

  //variable pour chaque photographe
  const thisPhotographer = [];
  const thisMedia = [];
  
  //stocker les données
  const {photographers, medias} = await getDataPhotographers();
  
  //recuperer les données d'un photographe et les médias
  const getThisPhotographer = () => {
    photographers.forEach(photographer => {
      if(photographer.id == currentId){
        thisPhotographer.push(photographer)
        console.log("thisphotographer",...thisPhotographer);
      }
    });
  };
  //Execution de la fonction
  getThisPhotographer();
  //variable pour sélectionner un element html
  const infophotographe = document.querySelector(".photograph-header")
//Afficher les infos du photographe dans html
const displayPhotographerInfo = () => {
    infophotographe.innerHTML = thisPhotographer.map(photographer => `
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
// recupere media

const getThisMedias = () => {
  medias.forEach(media => {
      if(media.photographerId == currentId){
          thisMedia.push(media);
          console.log('thisMedias',...thisMedia);
      }
  });
};
getThisMedias();

//recupération et création html
const gallery = document.querySelector ('.container_gallery')

const displayMediaPhotographe = () => {
gallery.innerHTML = thisMedia.map(media =>
   `  <article>
      <img class="asset_photographer" src='assets/images/Sample_Photos/${thisPhotographer[0].name.split(' ')[0]}/${media.image}'/>            
      <div>
          <span>${media.title}</span>
          <span>${media.likes}<i class="fas fa-heart"></i></span>
      </div>
  </article>

`).join('');
}
displayMediaPhotographe();
