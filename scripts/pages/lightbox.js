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
  

  
  const lightClose = document.querySelector("lightbox_bloc");
  const lgtBoxForm = document.querySelector("lightbox")
