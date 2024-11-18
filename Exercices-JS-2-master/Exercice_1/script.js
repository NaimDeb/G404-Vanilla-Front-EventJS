// Exercice 1
// Dans le fichier HTML fourni, changer l'image au survol de celle-ci par la deuxième.


const image1 = document.querySelector("#image1")


// image1.addEventListener("mouseHover", handleMouseHoverOnImage);
image1.addEventListener("mouseenter", handleMouseEnterOnImage);
image1.addEventListener("mouseleave", handleMouseLeaveOnImage);

function handleMouseEnterOnImage() { 
    image1.src="./images/image1_2.jpg";
}
function handleMouseLeaveOnImage() { 
    image1.src="./images/image1.jpg";
}
