// 🕶️ Modale Caché :

//     Créez une case de 200 px par 200 px qui contiennent un texte et un background color blanc.
//     Faire en sorte que cette case ne soit pas visible.
//     Créez un bouton quelque part dans la page.
//     Au clic du bouton, la case de texte apparaît.
//     Le background de la page devient gris foncé mais la couleur de la case reste blanche.
//     Si je clic en dehors de la case, elle disparaît et le background de la page redevient blanc.

let btn = document.querySelector("#btnApparait");
let caseTexte = document.querySelector(".case");
let body = document.querySelector("body");

btn.addEventListener("click", handleClickShowMsg);

let toggleCase = false;

function handleClickShowMsg(event) {
  if (!toggleCase) {

    // Mon sauveur
    event.stopPropagation();

    // On montre le popup
    caseTexte.style.visibility = "visible";
    body.style.backgroundColor = "gray";



    // Log
    // console.log("Switch toggle");

    // Deconstruct button TODO reconstruct later
    btn.removeEventListener("click", handleClickShowMsg);


    // Le popup est bien lancé, toggleCase devient true
    toggleCase = !toggleCase

    // On construit le listener de la fermeture du popup
    document.addEventListener("click", handleClickHideMsg);

  }
}

function handleClickHideMsg(event) {
  // targetClick = regarde la balise ou on a cliqué
let targetClick = event.target;
// Log
// console.log("start handleClickHide");
  
  if (!caseTexte.contains(targetClick) && toggleCase) {

    // Log
        // console.log("Detect TargetClick !");

        // On enlève le popup
        caseTexte.style.visibility = "hidden";
        body.style.backgroundColor = "white";

        // Log
        // console.log(caseTexte.style.visibility + " " + body.style.backgroundColor);
        
        
        // ToggleCase devient false
        toggleCase = !toggleCase
        // Log
        // console.log("Switch Toggle tclick");

        // On reconstruit le btn
        btn.addEventListener("click", handleClickShowMsg);
        // Deconstruct listener
        document.removeEventListener("click", handleClickHideMsg);


        
  } 
  // else {
    // Log
    // console.log("Not detected !");
    // console.log("targetclick = " + targetClick);
    // console.log("caseTexte = " + caseTexte);
    // console.log("togglecase = " + toggleCase) 
  // }
}

