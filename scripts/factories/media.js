// recuperer et stocker les medias du photographe

// création d'une class pour récupérer les medias de chaque photographe
class dataMedia {
    constructor(medias, photographers){
        this.title = medias.title
        this.image = medias.image
        this.like = medias.like
    }
    get title(){
        return this.title
    }
    get image (){
        return this.image
    }
    get like () {
        return this.like
    }
}


//const displayMediaPhotographe = () => (
    //gallery.innerHTML =  `
    //  <article>
    //    <img class="img_gallery" src="${this.image}" alt="">
    //  <div class="info_image">
    //    <span class ="title_image">${this.title}</span>
    //  <span class = "like_image">${this.like}</span>
    //</div>
    //</article>`
    //)
    //displayMediaPhotographe()
    const getThisMedias = () => {
        medias.forEach((media) => {
            if(media.photographerId == currentId){
                thisMedias.push(media);
            }
        })
    }
    getThisMedias();

    //recupération et création html
    const gallery = document.querySelector ('.container_gallery')

const displayMediaPhotographe = () => {
    gallery.innerHTML = thisListOfMedias.map(media =>
         `
        <article>
            <img class="media" src='assets/images/Sample_Photos/${thisPhotographer[0].name.split(' ')[0]}/${media.image}'style="width : 300px"/>            
            <div>
                <span>${media.title}</span>
                <span>${media.likes} <i class="fas fa-heart"></i></span>
            </div>
        </article>

    `).join('');
}
displayMediaPhotographe()