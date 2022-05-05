const close = document.querySelector('.close_modal');
let open = false;

function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    const first = document.getElementById ("first");
    first.focus();
    open = true;
    
    // const last = document.getElementById ('last');
    // const email = document.getElementById ('email');

}


function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    open = false;
}

close.addEventListener('click', function (){
    closeModal();
})


// ferme le formulaire avec 'echap'
document.addEventListener('keyup', function (e){
    if (e.key === "Escape" && open === true) {

         closeModal();
    }
});




//Fermeture de la modal apres envoi du formulaire
document.querySelector('.send_button').addEventListener('click', function(event){
event.preventDefault();
const modal = document.getElementById("contact_modal");
modal.style.display = "none";

});

// window.addEventListener('keydown', function (e){
//     if (e.key === "Escape"=== 'Esc'){
//         closeModal(e)
//         console.log(e.key);
//     }
// })