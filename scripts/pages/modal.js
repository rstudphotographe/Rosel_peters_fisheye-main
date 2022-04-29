const first = document.getElementById ("first");
const last = document.getElementById ('last');
const email = document.getElementById ('email');

first.addEventListener('change', function(){
    validFirst(this);
  });
  //variable qui utiliser lors de la validation du formulaire
  let validPrenom = false;
  const validFirst = function(inputFirst){
    let firstRegExp = new RegExp(
    '^[a-z]{2,15}$',
    );
    // variable qui servira a verifier si le regex est bien respecter
    let testFirst = firstRegExp.test(inputFirst.value)
    //variable pour signaler que le champ doit etre rempli
    let small = document.querySelector('.small1');
    if(testFirst) {
        validPrenom = true;
        small.innerHTML = '';
        first.style.borderColor = 'white';
    } else {
      // insertion du style  si erreur lors de la saisi
        first.style.borderColor = 'red';
        small.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom';
    }
  
  };
  
  //**verifier la saisi de la validation last name*************************
  last.addEventListener('change', function(){
    validLast(this);
  });
  let validNom = false;
  const validLast = function(inputLast){
    let lastRegExp = new RegExp(
      '^[a-z]{2,15}$',
    );
    // variable qui servira a verifier si le regex est bien respecter
    let testLast = lastRegExp.test(inputLast.value)
    let small = document.querySelector('.small2');
    if(testLast) {
        validNom = true;
      small.innerHTML = '';
      last.style.borderColor = 'white';
    } else {
      // insertion du style  si erreur lors de la saisi
      last.style.borderColor = 'red';
      small.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du nom';
    }
  };
  
  
  //*****************verifiez la bonne saisi de l'emailvalidation Email******************************
  email.addEventListener('change', function(){
    validEmail(this);
  });
  let validMail = false;
  const validEmail = function(inputEmail){
    let emailRegExp = new RegExp(
      '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$',
    );
    let testEmail = emailRegExp.test(inputEmail.value)
    let small = document.querySelector('.small3');
    if(testEmail) {
        validMail = true;
      small.innerHTML = '';
      email.style.borderColor = 'white';
    } else {
      email.style.borderColor = 'red';
      small.innerHTML = 'Veuillez saisir un email valide';
    }
  };