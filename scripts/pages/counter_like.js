//Pour gerer l'icrementation et la décrementation des likes par media et le total des likes
export const compteurLikes = () => {
    const nbrLikes = document.querySelectorAll('.number_like');
    const iconheart = document.querySelector('.like_icon');
    const totalLike = document.querySelector('.globalTotalLike');
    
    // Permet d'actualiser le nouveau total global selon like ou dislike sur un media
  const newTotalLike = () => {
    // Servira à stocker le total des likes des medias
    let totalCounter = [];
    console.log(totalCounter);
    nbrLikes.forEach((counter) => {
      totalCounter.push(Number(counter.innerText));
    });
    // accumulateur + valeur courante en l'additionnant
    totalCounter = totalCounter.reduce((acc, cur) => acc + cur);    
    totalLike.innerHTML = `${totalCounter} / <i class="fas fa-heart"></i>`;
  };
  newTotalLike();
}


