// Exercice 5
// Dans le fichier HTML fourni, faire comme dans l'exercice 1 mais avec 5 images.
// Bonus Ne faire qu'une seule fonction JavaScript pour cet exercice.

const allImages = document.querySelectorAll("img");

allImages.forEach((image) => {
  image.addEventListener("mouseenter", handleMouseEnterOnImage);
  // image.addEventListener("mouseleave", handleMouseLeaveOnImage);
});
let toggle = true;

function handleMouseEnterOnImage(event) {
  let imageName = event.target.id;

  if (toggle == true) {
    event.target.src = "./images/" + event.target.id + "_2.jpg";
  }
  if (toggle == false) {
    event.target.src = "./images/" + event.target.id + ".jpg";
  }

  toggle = !toggle
}
// function handleMouseLeaveOnImage(event) {

//     let imageName = event.target.id

//     event.target.src="./images/" + event.target.id + ".jpg";
// }
