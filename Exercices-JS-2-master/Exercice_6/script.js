// Exercice 6
// Dans le fichier HTML fourni, faire comme dans l'exercice 5 mais remettre l'image d'origine dès que la souris ne survol plus l'image.
// Bonus Ne faire que deux fonctions JavaScript pour cet exercice.

const allImages = document.querySelectorAll("img")

allImages.forEach((image) => {
image.addEventListener("mouseenter", handleMouseEnterOnImage);
image.addEventListener("mouseleave", handleMouseLeaveOnImage);
})



function handleMouseEnterOnImage(event) { 
    
    let imageName = event.target.id

    console.log(imageName)


    event.target.src="./images/" + event.target.id + "_2.jpg";

}
function handleMouseLeaveOnImage(event) { 

    let imageName = event.target.id

    console.log(imageName)


    event.target.src="./images/" + event.target.id + ".jpg";


}