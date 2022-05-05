// création d'une class pour récupérer les medias de chaque photographe
class Media {
  constructor(urlMedias, urlPhotographer){
    this.medias = urlMedias;
    this.urlPhotographer = urlPhotographer;
    this.htmlContent = document.querySelector(".container_gallery");
    this.thumbs = `assets/images/Sample_Photos/${this.urlPhotographer.name.split(" ")[0]}/`;
  
    this.medias.map(elt =>{
      if (elt.image) {
         this.image(elt);
       } else if (elt.video) {
         this.video(elt);
       }
      }

    )
  };
  
  // Cration des fonctions qui permet de choisir le bon média
  image(lien_media) {
   const picPhotographer = `<a href="${this.thumbs}${lien_media.image}"><img class = "asset_photographer" src= "${this.thumbs}/${lien_media.image}" alt="${lien_media.title}"/></a>`;
    this.creationGallery(lien_media, picPhotographer);
  }
  
  video(lien_media) {
   const vidPhotographer = `<a href="${this.thumbs}${lien_media.video}" aria-label="video"><video class = "asset_photographer" src= "${this.thumbs}/${lien_media.video}" title="${lien_media.title}"/></a>`;
    this.creationGallery(lien_media, vidPhotographer);
  }

  // affichage page html
  creationGallery(lien_media, lien_media_2)  {
    this.htmlContent.insertAdjacentHTML('afterbegin',
      `<article>
       ${lien_media_2}
        <div class="info_media" aria-label="vignette cliquable">
          <span class = "title_media">${lien_media.title}</span>
          <div class= "container_like">
            <p class = "number_like"  
            aria-label="affiche le compteur de like">${lien_media.likes}</p>
            <button class="btn_like" aria-label="Coeur pour aimer le media et augmenter son compteur" ><i class="fas fa-heart like-icon"></i></button>
          </div>
        </div>
        </div>
      </article>`
      )
    }
};


  