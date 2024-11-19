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

btnCarousel.addEventListener("click", handleClickBtnShowCarousel)
btnLeft.addEventListener("click", handleClickCarouselLeft)
btnRight.addEventListener("click", handleClickCarouselRight)


const imageList = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];

let indexImage = 0;


function handleClickBtnShowCarousel() {
    imgCarousel.style.visibility = "visible"
}

function handleClickCarouselLeft() {

    let currentImage = indexImage+1
    // console.log("currentImage = " + currentImage);
    

    indexImage = (indexImage-1 + imageList.length) % imageList.length
    // console.log("changed index to " + indexImage);
    

    // console.log(imgCarousel.src.replace((currentImage +".jpg"), ((indexImage+1) +".jpg")))

    // console.log("Original img source = " + imgCarousel.src)

    imgCarousel.src = imgCarousel.src.replace((currentImage +".jpg"), ((indexImage+1) +".jpg"))

    // console.log("replaced " + currentImage + ".jpg to " + (indexImage+1) + ".jpg");
}


function handleClickCarouselRight() {

    let currentImage = indexImage+1
    // console.log("currentImage = " + currentImage);
    

    indexImage = (indexImage+1 + imageList.length) % imageList.length
    // console.log("changed index to " + indexImage);
    

    // console.log(imgCarousel.src.replace((currentImage +".jpg"), ((indexImage+1) +".jpg")))

    // console.log("Original img source = " + imgCarousel.src)

    imgCarousel.src = imgCarousel.src.replace((currentImage +".jpg"), ((indexImage+1) +".jpg"))

    // console.log("replaced " + currentImage + ".jpg to " + (indexImage+1) + ".jpg");
    
}


