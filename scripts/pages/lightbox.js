export class Lightbox {
    static init () {
      //recupere le lien de chaque média
      const linkMedia = Array.from(document.querySelectorAll('a[href$=".jpg"], a[href$=".mp4"]')) 
        .forEach(link => link.addEventListener('click', e => {
          e.preventDefault()
        new Lightbox(e.currentTarget.getAttribute('href') );
  
      } ))
    }
    
    //                         Affiche le contenu de la lightbox
    constructor(url) {
      this.element = this.creatDom(url)
      document.body.appendChild(this.element)
      
      console.log(url);
    }
    
    //ferme la lightbox
    close(e) {
      e.preventDefault()
      this.element.classList.add('fadeout')
      window.setTimeout(() => {
        this.element.parentElement.removeChild(this.element)
      }, 500)
    }
    //creation de le structure html de la lightbox
    creatDom(url) {
      const dom = document.createElement ('div')
      dom.classList.add('lightbox')
      dom.innerHTML = `
      <button class="lightbox_bloc"><i class="fa-solid fa-xmark close_box"></i></button>
      <button class="lightbox_next"><i class="fa-solid fa-angle-left"></i></button>
      <button class="lightbox_prev"><i class="fa-solid fa-angle-right"></i></button>
      <div class="container_lightbox">
          <img src="${url}" alt="">
      </div>`
      dom.querySelector('.close_box').addEventListener('click', this.close.bind(this))
      return dom
    }
    
  }
  

  
  const lightClose = document.querySelector("lightbox_bloc");
  const lgtBoxForm = document.querySelector("lightbox")
