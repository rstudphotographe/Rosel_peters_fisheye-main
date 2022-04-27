export class Lightbox {
    static init () {
      //recupere le lien de chaque média
      const links = Array.from(document.querySelectorAll('a[href$=".jpg"], a[href$=".mp4"]'));
  
      const gallery = links.map((link) => link.getAttribute('href'));
      
      links.forEach((link) => 
      link.addEventListener('click',(e) => {
        e.preventDefault()
        let lien = e.target.getAttribute('src').substr(-3,4);
        if ( lien === 'jpg') {
          let bImg = `<img src="${e.target.getAttribute('src')}" alt=""/>`; 
          
          new Lightbox(link.getAttribute('href'), gallery, bImg);
        } else  {
          
          let bVideo = `<video src="${e.target.getAttribute('src')}" alt=""/>`; 
          new Lightbox(link.getAttribute('href'), gallery, bVideo);
        }
        
        console.log(e.target);
        console.log(lien);
      } )
      )
    }
    //                         Affiche le contenu de la lightbox
    constructor(url, images, balise) {
      this.element = this.creatDom(url, balise)
      this.images = images
      this.onKeyup =this.onKeyup.bind(this)
      document.body.appendChild(this.element)
      document.addEventListener('keyup', this.onKeyup)
      
      
    }

    //ferme avec 'echap'
    onKeyup (e) {
      if (e.key === "Escape") {
        this.close(e);
      } else if (e.key === "ArrowLeft") {
        this.preview(e);
      } else if (e.key === "ArrowRight") {
        this.next(e);
      }
    }
    //ferme la lightbox
    close(e) {
      e.preventDefault();
      this.element.classList.add('fadeout');
      window.setTimeout(() => {
        this.element.parentElement.removeChild(this.element);
      }, 500)
      document.removeEventListener('keyup', this.onKeyup);
    }
    //avancer dans l'affichage des images
    next(e) {
      e.preventDefault()
      let i = this.images.findIndex(image => image === this.url);
      if (i == this.images.length - 1) {
        i = -1;
    }
  }
    //reculer dans l'affichage
    prev(e) {
      e.preventDefault()
      let i = this.images.findIndex(image => image === this.url);
      if (i == 0) {
        i = this.images.length;
      }
    
    }

    
    //creation de le structure html de la lightbox
    creatDom(link, balise) {
      const dom = document.createElement ("div")
      dom.classList.add("lightbox")
      dom.innerHTML = `
      <button class="lightbox_bloc"><i class="fa-solid fa-xmark close_box"></i></button>
      <button class="lightbox_next"><i class="fa-solid fa-angle-left box_next"></i></button>
      <button class="lightbox_prev"><i class="fa-solid fa-angle-right box_prev"></i></button>
      <div class="container_lightbox">${balise}
      </div>`;
      dom.querySelector('.close_box').addEventListener('click', this.close.bind(this))
      dom.querySelector('.box_next').addEventListener('click', this.next.bind(this))
      dom.querySelector('.box_prev').addEventListener('click', this.prev.bind(this))
      return dom ;
    }
    
  }
  

  
  
