//Pour gerer l'icrementation et la décrementation des likes par media et le total des likes
export const compteurLikes = () => {
  console.log('interne');
  const nbrLikes = document.querySelectorAll('.number_like');
  const totalLike = document.querySelector('.globalTotalLike');
  //const iconHeart = document.querySelector('.like-icon');
    
    // Permet d'actualiser le nouveau total global selon like ou dislike sur un media
  const newTotalLike = () => {
    // stocke le total des likes 
    let totalLikes = [];
    nbrLikes.forEach((counter) => {
      //permet de manipuler les likes dans le json
      totalLikes.push(Number(counter.innerText));
    });

    //va additionner tout les likes accumuler des differents medias
    totalLikes = totalLikes.reduce((accumulValue, currentValue) => accumulValue + currentValue);    
    totalLike.innerHTML = `${totalLikes}/<i class="fas fa-heart heart_foot"></i>`;
  };
  newTotalLike();


// Ajouter la fonction a chaque like dans les médias
  let buttons = document.querySelectorAll('.btn_like');
  buttons.forEach(button =>{ 
   let nbrLike = button.parentElement.children[0];
//console.log(nbrLike);
   // incrémente le nouveau total de like
   let memoryLike = nbrLike.innerText;

   //memorise le nombre de like, met un  a un media
   function newLike() {
     nbrLike.innerText = `${memoryLike}`;
    }
    button.addEventListener("click", () => {
      console.log('bonjour');
         if (nbrLike) {

           memoryLike++;
           newLike();
           newTotalLike();
          } else {
            
            memoryLike--;
            newLike();
            newTotalLike();
         }
       })});
     };


// ajoute un like avec la touche entré      
      document.addEventListener('keyup', function (e){
       if (e.key === "Enter" && open === true) {
  
             newLike();
       }
  });
