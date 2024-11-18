// Exercice 4
// Dans le fichier HTML fourni, faire que le bouton RAZ efface les données des champs du formulaire.

const btnRaz = document.querySelector("form > button");

const lastName = document.querySelector("#lastname");
const firstName = document.querySelector("#firstname");
const city = document.querySelector("#city");

const textBoxes = [lastName,firstName,city];


btnRaz.addEventListener("onClick", handleClick);

function handleClick(){

    console.log("click")

    textBoxes.forEach((texte) => {
        console.log(texte);
        
        texte.value = ""
    })
}