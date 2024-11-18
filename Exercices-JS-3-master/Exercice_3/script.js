// Exercice 3
// Dans le fichier HTML fourni, changer la couleur du texte en fonction du bouton choisi.

const texte = document.querySelector("#text")

const colorButtons = document.querySelectorAll(".color")

colorButtons.forEach((color) => {
    color.addEventListener("click", handleClickChangeColor)
})

function handleClickChangeColor(event) {
    texte.style.color = event.target.classList[1];
    
}