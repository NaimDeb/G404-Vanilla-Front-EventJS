// 🔥 Bonus : 🎠 Carrousel

//     Créez un bouton
//     Au clic du bouton une image apparaît
//     Quand je clic à droite de l'image, une autre image apparaît
//     bonus : faire un effet de transition
//     Si je clic à droite de l'image une troisième apparaît, si je clic à gauche la précédente apparaît
//     ⚠️ interdiction d'utiliser les carrousels des frameworks css !


const btnCarousel = document.querySelector(".btnCarousel")
const imgCarousel = document.querySelector(".imgCarousel")
const btnLeft = document.querySelector("#divLeft")
const btnRight = document.querySelector("#divRight")


const imgRight = document.querySelector(".imgSuivant")
const imgLeft = document.querySelector(".imgPrecedent")

btnCarousel.addEventListener("click", handleClickBtnShowCarousel)


// Liste de toutes les images
const imageList = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];

// Initialisation de index
let indexImage = 0;


// Bouton pour montrer l'image du carousel et d'initier les eventListener
function handleClickBtnShowCarousel() {
    imgCarousel.style.visibility = "visible"
    imgRight.style.visibility = "visible"
    imgLeft.style.visibility = "visible"

    btnLeft.addEventListener("click", handleClickCarouselLeft)
    btnRight.addEventListener("click", handleClickCarouselRight)
}


// Boutons gauche et droite pour changer l'image
function handleClickCarouselLeft() {


    // On calcule l'indice de la prochaine image
    let nextImageIndex = (indexImage + 1) % imageList.length;
    let prevImageIndex = (indexImage - 1 + imageList.length) % imageList.length;
    let previewImageIndex = (prevImageIndex - 1 + imageList.length) % imageList.length;


    imgLeft.animate([
        { transform: "translateX(0)" },
        { transform: "translateX(-300px)" }
    ], {
        duration: 1000,
        iterations: 1
    });

    // imgCarousel.animate([
    //     { transform: "translateX(0)" },
    //     { transform: "translateX(-300px)" }
    // ], {
    //     duration: 1000,
    //     iterations: 1
    // });

    // imgRight.animate([
    //     { transform: "translateX(0)" },
    //     { transform: "translateX(-300px)" }
    // ], {
    //     duration: 1000,
    //     iterations: 1
    // });


    // setTimeout(() => {
    // Mettre à jour les images
    imgLeft.src = imgLeft.src.replace(imageList[prevImageIndex], imageList[previewImageIndex]); 
    imgCarousel.src = imgCarousel.src.replace(imageList[indexImage], imageList[prevImageIndex]);
    imgRight.src = imgRight.src.replace(imageList[nextImageIndex], imageList[indexImage]);


    // }, 1000)


    // Mettre à jour l'indice courant
    indexImage = prevImageIndex;



}


function handleClickCarouselRight() {

    // On calcule l'indice de la prochaine image
    let nextImageIndex = (indexImage + 1) % imageList.length;
    let prevImageIndex = (indexImage - 1 + imageList.length) % imageList.length;
    let previewImageIndex = (nextImageIndex + 1 + imageList.length) % imageList.length;

    

    // Mettre à jour les images
    imgLeft.src = imgLeft.src.replace(imageList[prevImageIndex], imageList[indexImage]); 
    imgCarousel.src = imgCarousel.src.replace(imageList[indexImage], imageList[nextImageIndex]);
    imgRight.src = imgRight.src.replace(imageList[nextImageIndex], imageList[previewImageIndex]);

    // Mettre à jour l'indice courant
    indexImage = nextImageIndex;
        
    }
// }



