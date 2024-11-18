// 🔳 Quadrillage coloré :

//     Créez 9 cases de taille identique.
//     Au clic sur une case, la couleur de la case change.
//     Si je clic sur la case à nouveaux, elle change encore de couleur.
//     Le nombre de couleurs différentes doit être de minimum 5.
//     Le clic d'une case ne doit pas changer la couleur de ses voisines.

const colorList = ["red","blue","green","gray","pink"]


const caseList = document.querySelectorAll(".case")

caseList.forEach((element) => {
    element.addEventListener("click", handleClickChangeColor)    
});

function handleClickChangeColor(event) {

    let caseColor = event.target.style.backgroundColor 

    let isColorinIndex = colorList.includes(caseColor)

    if (!isColorinIndex) {
        event.target.style.backgroundColor  = "red"
    }
    if (isColorinIndex) {
        
        let indexOfColor = colorList.indexOf(caseColor)

        let listLength = colorList.length
        
        event.target.style.backgroundColor = colorList[(indexOfColor+1)%listLength]
    }

    console.log(event.target.style.backgroundColor)


    // event.target.classList = colorList[]
    
}

