// Exercice 3
// Dans le fichier HTML fourni, afficher une boite de dialogue avec la valeur du champ dès que l'on appuie sur le clavier.

const textBox = document.querySelector("#lastname")

console.log(textBox)

// Ou blur
textBox.addEventListener("input", handleTypeTextBox);

function handleTypeTextBox() {
    alert("Hallo")
}