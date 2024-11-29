let nombre = Math.floor(Math.random()*100)+1;

let choix = document.querySelector(".choix")
let dernierResultat = document.querySelector(".dernierResultat")
let indice = document.querySelector(".indice")
let essais = document.querySelector(".essais")

let valider = document.querySelector(".valider")
let champ = document.querySelector(".champ")

let nbEssais = 1;
let essaisRestant = 10
essais.textContent = "Il vous reste " + essaisRestant + " essais"
let reset;

document.querySelector('.trigger-text').addEventListener('click', function() {
    var hiddenText = document.getElementById('hiddenText');
    if (hiddenText.style.display === 'none' || hiddenText.style.display === '') {
        hiddenText.style.display = 'block';
    } else {
        hiddenText.style.display = 'none';
    }
});

function verifNombre(){
    let reponse = Number(champ.value)
    if (nbEssais === 1){
        choix.textContent = "Choix précédents : "
    }

    choix.textContent += reponse + " ; "

    if (reponse === nombre){
        dernierResultat.textContent = "RÉPONSE CORRECTE !! VOUS AVEZ TROUVÉ LE NOMBRE !!"
        dernierResultat.style.backgroundColor = "green";

        indice.textContent = "";
        jeuFini();
    } 
    else if(nbEssais === 10){
        dernierResultat.textContent = "DOMMAGE !!! VOUS AVEZ PERDU !!!"
        jeuFini()
    }
    else{
        dernierResultat.textContent = "MAUVAISE RÉPONSE !!! RÉÉSSAYEZ !!"

    dernierResultat.style.backgroundColor = "red"

    if (reponse < nombre){
        indice.textContent = "TROP PETIT !!"
        indice.style.color = "white"
    }
    else if (reponse > nombre){
        indice.textContent = "TROP GRAND !!"
        indice.style.color = "blue"

    }
}
nbEssais++;
essaisRestant --;
essais.textContent = "Il vous reste " + essaisRestant + " essais"
console.log(essaisRestant);
champ.value = "";
champ.focus()
}

valider.addEventListener("click", verifNombre)

function jeuFini(){
    champ.disabled = true;
    valider.disabled = true;
    reset = document.createElement("button")
    reset.textContent = "Recommencer"
    reset.classList.add("reset")
    
    var div = document.querySelector(".resultat")
    console.log(div)

    div.appendChild(reset)
    reset.addEventListener("click", recommencer)
}

function recommencer(){
    nbEssais = 1;

    let resetResultat = document.querySelectorAll('.resultat p')
    for (let i = 0; i < resetResultat.length ; i++){
        resetResultat[i].textContent = ""
    }

    reset.parentNode.removeChild(reset);

    essaisRestant = 10
    essais.textContent = "Il vous reste " + essaisRestant + " essais"
    champ.disabled = false;
    champ.value = "";
    champ.focus();
    valider.disabled = false;

    nombre = Math.floor(Math.random()* 100) + 1;
}