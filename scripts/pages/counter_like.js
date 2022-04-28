//Crée une fonction totalLikes()
Dedans :

//Initie le compteur :
let totalOfLikes = 0

//Récupère toutes les like-icon avec :
const likeIcon = document.querySelectorAll('.like-icon') 

//tu fais un forEach :
likeIcon.forEach((heart) => {
    const i = parseInt(heart.previousElementSibling.innerHTML)
    totalOfLikes += i
  })

//Si tu consoles.log(totalOfLikes) tu devrais être bon, reste à l'intégrer dans HTML