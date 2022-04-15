
// création d'une class pour récupérer les medias de chaque photographe

class Media {
  constructor(urlmedias, urlPhotographer){
    this.media = urlmedias;
    this.urlPhotographer = urlPhotographer;
    this.htmlContent = document.querySelector(".container_gallery");
    console.log(this.urlPhotographer.name);
    this.thumbs = `assets/images/Sample_Photos/${this.urlPhotographer.name.split(" ")[0]}/`;
    console.log(this.thumbs);
    
    if (this.media.image) {
      console.log(this.image);
      this.image();
    } else if (this.media.video) {
      this.video();
    }
  }
  
  // affichage page html
  creationGallery()  {
    this.htmlContent.insertAdjacentHTML('afterbegin',
      `<article>
       <div class = "card_media">  
       <img src="${this.thumbs}
        alt=""/>  
        <div class="info_media">
          <span class = "title_media">${this.media.title}</span>
          <div class= "container_like">
            <p class = "number_like">${this.media.likes}</p>
            <i class="fas fa-heart"></i>
          </div>
        </div>
        </div>
      </article>`)
    }
    
    
    image() {
      this.image = `<a href="${this.thumbs}${this.media.image}"><img src= "${this.thumbs}${this.media.image}" alt="${this.media.title}"/></a>`;
      this.creationGallery(this.image);
    }
  
    video() {
      this.video = `<a href="${this.thumbs}${this.media.video}"><video src= "${this.thumbs}${this.media.video}" alt="${this.media.title}"/></a>`;
      this.creationGallery(this.video);
    }
  }

  
  console.log('essaie console log');