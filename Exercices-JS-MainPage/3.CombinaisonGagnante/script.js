// 🏆️ Combinaison gagnante :

//     Créez un paragraphe avec une consigne de combinaison de 2 touches à appuyer.
//     Lorsque la combinaison est pressée, une phrase apparaît dans un autre paragraphe.
//     Bonus : si j'appuie sur une troisième touche, le texte change de couleur.



const texteGagnant = document.querySelector("#texteGagnant")
const divTexte = document.querySelector(".divTexte")


document.addEventListener("keydown", handleKeysForText);

function handleKeysForText(event) {
    if(event.ctrlKey && event.key == "v"){
        texteGagnant.style.visibility = "visible"
    };
    if(event.ctrlKey && event.shiftKey && event.key == "V"){
        divTexte.style.color = "red"
    };    
}