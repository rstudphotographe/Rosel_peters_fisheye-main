
// création d'une class pour récupérer les medias de chaque photographe

class Media {
  constructor(urlMedias, urlPhotographer){
    // console.log(urlMedias);
    // console.log(urlPhotographer);
    this.medias = urlMedias;

    this.urlPhotographer = urlPhotographer;
    this.htmlContent = document.querySelector(".container_gallery");
    // console.log(this.urlPhotographer.name);
    this.thumbs = `assets/images/Sample_Photos/${this.urlPhotographer.name.split(" ")[0]}`;
    // console.log(this.thumbs);
    // console.log(this.media);
    this.medias.map(elt =>{
      if (elt.image) {
         this.image(elt);
       } else if (elt.video) {
         this.video(elt);
       }
       //console.log(this.media.image);
      //console.log(media);
    }

    )

  }
  
  // affichage page html
  creationGallery(param, param2)  {
    this.htmlContent.insertAdjacentHTML('afterbegin',
      `<article>
       ${param2}
        <div class="info_media">
          <span class = "title_media">${param.title}</span>
          <div class= "container_like">
            <p class = "number_like">${param.likes}</p>
            <i class="fas fa-heart"></i>
          </div>
        </div>
        </div>
      </article>`)
    }
    
    
    image(param) {
     const myImage = `<a href="${this.thumbs}${param.image}"><img class = "asset_photographer" src= "${this.thumbs}/${param.image}" alt="${param.title}"/></a>`;
      this.creationGallery(param, myImage);
    }
    
    video(param) {
     const myVideo = `<a href="${this.thumbs}${param.video}"><video class = "asset_photographer" src= "${this.thumbs}/${param.video}" alt="${param.title}"/></a>`;
      this.creationGallery(param, myVideo);
    }
  };

  
  