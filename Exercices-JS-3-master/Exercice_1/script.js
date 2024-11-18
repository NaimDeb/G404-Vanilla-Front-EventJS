// Exercice 1
// Dans le fichier HTML fourni, au survol de l'image ajouter une bordure de 3px rouge et la retirer quand la souris ne la survol plus.


const image1 = document.querySelector("#image1")

image1.addEventListener("mouseenter", handleMouseHoverAddBorder)
image1.addEventListener("mouseleave", handleMouseHoverRemoveBorder)


function handleMouseHoverAddBorder() {

    image1.classList.add("border-red")
    
    
}
function handleMouseHoverRemoveBorder() {

    image1.classList.remove("border-red")

    
}