import getDataPhotographers from "./service.js";

//recuperer et inserer l'id du photographe
const currentId = Number(document.location.href.split("=")[1]);

//stocker les données
const {photographers, medias} = await getDataPhotographers();

  
//recuperer les données d'un photographe 
const onePhotographe = photographers.filter(photographer => currentId === photographer.id)[0];

//recuperer les medias d'un photographe
const allMediaPhotographer = medias.filter(media => currentId === media.photographerId)


//*****************************************************************************************************/
//********************************Header du photographe********************************************* */

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
      <img class="img_photographer" src="assets/Photographers/Photographers_ID_Photos/${onePhotographe.portrait}" alt="${onePhotographe.name}">
      ` 
}
displayPhotographerInfo()

//*******************************************************************************************************************************************************//

// active la factory des médias dans media.js pour afficher les photos pour chaque photographe
const allMedia = new Media(allMediaPhotographer, onePhotographe)


//**************************TRI de la gallerie***********************//
//tri par popularité

const tryPopular = document.querySelector('.popular');

tryPopular.addEventListener("click", try_popular);
function try_popular(e) {
  e.preventDefault();
   allMediaPhotographer.sort(function(a, b){ 
     if (a.likes < b.likes){
       return -1
      }
      else {
        return +1
      }
    })
    // vide la page des anciens médias
    document.querySelector('.container_gallery').innerHTML = '';
    // affiche les medias avec le tri effectuer
    new Media(allMediaPhotographer, onePhotographe);
  }
  console.log(allMediaPhotographer);

  //********************************tri par date
  const tryDate = document.querySelector('.date');

  tryDate.addEventListener("click", try_date);
  function try_date(e) {
    e.preventDefault();
    allMediaPhotographer.sort(function(a, b){
      if (a.date < b.date){

        return -1
      }
      else{

        return+1
      }
    })
    
    document.querySelector('.container_gallery').innerHTML = '';
  
    new Media(allMediaPhotographer, onePhotographe);
  }

//***********************TRI par Titre************************ **/
const tryTitle = document.querySelector('.title_of_media');

  tryTitle.addEventListener("click", try_title);
  function try_title(e) {
    e.preventDefault();
    allMediaPhotographer.sort(function(a, b){
      if (a.title > b.title){

        return -1
      }
      else{

        return+1
      }
    })
    
    document.querySelector('.container_gallery').innerHTML = '';
  
    new Media(allMediaPhotographer, onePhotographe);
  }

//-------------------------------**--------**-----------------------------------\\
//*********************************lightbox**************************************\\


class lightbox {
  static init () {
    //recupere le lien de chaque média
    const linkMedia = document.querySelectorAll('a[href$=".jpg"], a[href$=".mp4"]') 
      .forEach(link => link.addEventListener('click', e => {
        e.preventDefault()
      new lightbox(e.currentTarget.getAttribute('href') );

    } ))
  }
  
  //                         Affiche le contenu de la lightbox
  constructor(urlMedia) {
    const element = this.creatDom(urlMedia)
    document.body.appendChild(element)
    
    console.log(urlMedia);
  }
  
  //creation de le structure html de la lightbox
  
  creatDom(link) {
    const dom = document.createElement ('div')
    dom.classList.add('lightbox')
    dom.innerHTML = `
    <button class="lightbox_bloc"><i class="fa-solid fa-xmark"></i></button>
    <button class="lightbox_next"><i class="fa-solid fa-angle-left"></i></button>
    <button class="lightbox_prev"><i class="fa-solid fa-angle-right"></i></button>
    <div class="container_lightbox">
        <img src="${link}" alt="">
    </div>`
    return dom
  }
  
}

lightbox.init();

const lightClose = document.querySelector("lightbox_bloc");
const lgtBoxForm = document.querySelector("lightbox")
//Créer les functions pour trier la gallerie




// const getThisMedias = () => {
//   medias.forEach(media => {
//       if(media.photographerId == currentId){
//           medias.push(media);          
//       }
//   });
// };
// getThisMedias();

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
//displayMediaPhotographe()
