//Pour gerer l'icrementation et la décrementation des likes par media et le total des likes
export const compteurLikes = () => {
  const nbrLikes = document.querySelectorAll('.number_like');
  const totalLike = document.querySelector('.globalTotalLike');
  const iconHeart = document.querySelector('.like-icon');
    
    // Permet d'actualiser le nouveau total global selon like ou dislike sur un media
  const newTotalLike = () => {
    // stocke le total des likes 
    let totalLikes = [];
    console.log(totalLikes);
    nbrLikes.forEach((counter) => {
      totalLikes.push(Number(counter.innerText));
    });

    // accumulateur + valeur courante en l'additionnant
    totalLikes = totalLikes.reduce((accumulValue, currentValue) => accumulValue + currentValue);    
    totalLike.innerHTML = `${totalLikes}/<i class="fas fa-heart heart_foot"></i>`;
  };
  newTotalLike();



  let buttons = document.querySelectorAll('.btn_like');
  buttons.forEach(button =>{ 
   let nbrLike = button.parentElement.children[0];
   let memoryLike = nbrLike.innerText;
   function newLike() {
     nbrLike.innerText = `${memoryLike}`;
    }
    button.addEventListener("click", () => {
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


