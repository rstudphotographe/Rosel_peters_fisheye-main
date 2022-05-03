export const selectedChoiceHidden = () => {
   const selected = document.querySelector('.menu_deroulant')
    const popularity = document.querySelector('.popular')
    const date = document.querySelector('.date')
    const title = document.querySelector('.title_of_media')

    if (selected.innerHTML === popularity.innerHTML) {
      popularity.classList.remove("dropdown-menu-li");
      popularity.innerHTML ="";
    } else {
      popularity.innerHTML = "Popularité"  `<i class="fa-solid fa-angle-down fleche_haut"></i>`;
      popularity.classList.add("dropdown-menu-li");
    }
    if (selected.innerHTML === date.innerHTML) {
      date.classList.remove("dropdown-menu-li");
      date.innerHTML = "";
    } else {
      date.innerHTML = "Date";
      date.classList.add("dropdown-menu-li");
    }
    if (selected.innerHTML === title.innerHTML) {
      title.classList.remove("dropdown-menu-li");
      title.innerHTML = "";
    } else {
      title.innerHTML = "Titre";
      title.classList.add("dropdown-menu-li");
    }
  };
