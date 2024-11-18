// Exercice 2
// Dans le fichier HTML fourni, faire afficher ou masquer le texte en fonction de l'ancre.

const texte = document.querySelector("#text")

const btnAfficher = document.querySelector("a:first-of-type")
const btnMasquer = document.querySelector("a:last-of-type")


btnAfficher.addEventListener("click", handleClickAfficherTexte)
btnMasquer.addEventListener("click", handleClickHideTexte)


function handleClickAfficherTexte() {
    texte.style.visibility = "visible"
    
}
function handleClickHideTexte() {
    texte.style.visibility = "hidden"

}