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
    caseTexte.style.visibility = "visible";
    body.style.backgroundColor = "gray";
    document.addEventListener("click", handleClickHideMsg);

    toggleCase = !toggleCase;
    console.log("Switch toggle");

    btn.removeEventListener("click", handleClickShowMsg);

  }
}

function handleClickHideMsg(event) {
  let targetClick = event.target;
  console.log("start handleClickHide");
  

  if (targetClick != caseTexte && toggleCase) {

        console.log("Detect TargetClick !");

        caseTexte.style.visibility = "hidden";
        body.style.backgroundColor = "white";
        
        toggleCase = !toggleCase
        console.log("Switch Toggle tclick");
        
  } else {
    console.log("Not detected !");
    console.log("targetclick = " + targetClick);
    console.log("caseTexte = " + caseTexte);
    console.log("togglecase = " + toggleCase)
    
    
  }
}

// function handleClickRemovePopup() {

//     let isPopupVisible = caseTexte.style.visibility

//     if (isPopupVisible = "visible") {

//         if

//         caseTexte.style.visibility = "hidden"
//         body.style.backgroundColor = "white"
// }

// }

// function hideOnClickOutside(element) {
//     const outsideClickListener = event => {
//         if (!element.contains(event.target) && isVisible(element)) { // or use: event.target.closest(selector) === null
//           element.style.display = 'none';
//           removeClickListener();
//         }
//     }
