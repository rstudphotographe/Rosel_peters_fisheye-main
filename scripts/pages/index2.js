
//Récupère et crée la structure htmlindex.html
async function displayData(photographers) {
const photographersSection = document.querySelector(".photographer_section");

photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
});
};

async function init() {
// Récupère les datas des photographes
//const { photographers } = await getPhotographers();
//displayData(photographers);
console.log(photographers)
};

//init();