//Pour gerer l'icrementation et la décrementation des likes par media et le total des likes
export const compteurLikes = () => {
    const nbrLikes = document.querySelectorAll('.number_like');
    const iconHeart = document.querySelector('.like-icon');
    const totalLike = document.querySelector('.globalTotalLike');
    
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
    totalLike.innerHTML = `${totalLikes} / <i class="fas fa-heart"></i>`;
  };
  newTotalLike();


   // Pour chaque élément (coeur) contenant la classe ".buttons_heart"
   iconHeart.forEach((button) => {
    // Cette variable va stocker le nombre de like de chaque élément
    let nbrLike = button.parentElement.children[0];
    
    // Cette variable va garder en mémoire la valeur une fois incrémentée ou décrémentée
    let memoryLike = nbrLike.innerText;

    // Lors de son appel, permettra de donner la nouvelle valeur de "memoryCount"
    const refreshLike = () => {
      nbrLike.innerText = `${memoryLike}`;
    };

    // Au clic sur un coeur, on vérifie si class "liked" ou "unliked", on agit en conséquence
    button.addEventListener("click", () => {
      if (button.classList.contains("unliked")) {
        button.classList.replace("unliked", "liked");
        nbrLike.style.color = "#d3573c";
        memoryLike++;
        refreshLike();
        newTotalLike();
      } else {
        button.classList.replace("liked", "unliked");
        nbrLike.style.color = "#901c1c";
        memoryLike--;
        refreshLike();
        newTotalLike();
      }
    });
  })
};


