function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}


//Fermeture de la modal apres envoi du formulaire
document.querySelector('.send_button').addEventListener('click', function(event){
event.preventDefault()
const modal = document.getElementById("contact_modal");
modal.style.display = "none";

});
