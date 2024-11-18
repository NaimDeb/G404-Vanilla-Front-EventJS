// Exercice 2
// Dans le fichier HTML fourni, afficher une boite de dialogue avec le message : "Merci de votre participation" quand le champ de saisie perd le focus.

const textBox = document.querySelector("#lastname")

console.log(textBox)

// Ou blur
textBox.addEventListener("focusout", handleOutOfFocusTextBox);

function handleOutOfFocusTextBox() {
    alert("Hallo")
}
