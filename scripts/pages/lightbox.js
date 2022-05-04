export class Lightbox {
    static init () {
      //recupere le lien de chaque média
      const links = Array.from(document.querySelectorAll('a[href$=".jpg"], a[href$=".mp4"]'));
  
      const gallery = links.map((link) => link.getAttribute('href'));
      
      links.forEach((link) => 
      link.addEventListener('click',(e) => {
        e.preventDefault()
        new Lightbox(link.getAttribute('href'), gallery);
        
      } )
      )
    };
    //******************************Affiche le contenu de la lightbox*************************************\\
    
    constructor(url, images) {
      //rappel de la fonction creatDom
      this.element = this.creatDom(url);
      this.images = images;
      this.loadMedia(url);
      this.onKeyup =this.onKeyup.bind(this);
      document.body.appendChild(this.element);
      document.addEventListener('keyup', this.onKeyup);
     
    };

    //choix image ou video
    loadMedia(url){
      this.url =null;
      const container = this.element.querySelector('.container_lightbox');
      const loader = document.createElement('div');
      loader.classList.add('lightbox__loader');
      container.innerHTML = ``;
      container.appendChild(loader);

      if(url.includes('jpg')){
        const image = new Image();
        image.onload = () => {
          container.removeChild(loader);
          container.appendChild(image);
          this.url = url;
        };
        image.src = url;
      }else if (url.includes('mp4')) {

          let video = document.createElement('video');
          video.src = url;
          video.setAttribute('autoplay', '');
          video.setAttribute('loop', '');
          container.removeChild(loader);
          container.appendChild(video);
          this.url = url;
      }
    }

    //avancer dans l'affichage des images
    next(e) {
      e.preventDefault()
      let positionImg = this.images.findIndex((image) => image === this.url);
      if (positionImg == this.images.length - 1) {
        positionImg = -1;
      } 
      this.loadMedia(this.images[positionImg + 1])
    };
    
    
    //reculer dans l'affichage
    prev(e) {
      e.preventDefault()
      let positionImg= this.images.findIndex(image => image === this.url);
      if (positionImg == 0) {
        positionImg = this.images.length;
      } 
      
      this.loadMedia(this.images[positionImg - 1])
    };
    
    //ferme avec 'echap'
    onKeyup (e) {
      if (e.key === "Escape") {
        this.close(e);
      } else if (e.key === "ArrowLeft") {
        this.prev(e);
      } else if (e.key === "ArrowRight") {
        this.next(e);
      }
    };
    //ferme la lightbox
    close(e) {
      e.preventDefault();
      this.element.classList.add('fadeout');
      window.setTimeout(() => {
        this.element.parentElement.removeChild(this.element);
      }, 500)
      document.removeEventListener('keyup', this.onKeyup);
    };

    
    //creation de le structure html de la lightbox
    creatDom() {
      const dom = document.createElement ("div");
      dom.classList.add("lightbox");
      dom.innerHTML = `
      <button class="lightbox_bloc"><i class="fa-solid fa-xmark close_box"></i></button>
      <button class="lightbox_next"><i class="fa-solid fa-angle-left box_next"></i></button>
      <button class="lightbox_prev"><i class="fa-solid fa-angle-right box_prev"></i></button>
      <div class="container_lightbox">
      </div>`;
      dom.querySelector('.close_box').addEventListener('click', this.close.bind(this));
      dom.querySelector('.box_next').addEventListener('click', this.next.bind(this));
      dom.querySelector('.box_prev').addEventListener('click', this.prev.bind(this));
      return dom ;
    }
    
  };
  

  
  
