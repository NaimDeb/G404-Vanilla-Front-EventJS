// Exercice 4
// Dans le fichier HTML fourni, mettre les bordures des inputs en rouge si les mots de passe sont différents. Sinon les mettre en vert.

const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#confirmPassword")
const btnConfirm = document.querySelector("button")

btnConfirm.addEventListener("click", handleClickConfirm)

function handleClickConfirm() {

    if(password.value = confirmPassword.value) {
        password.style.border = "2px solid green"
        confirmPassword.style.border = "2px solid green"
    } else {
        password.style.border = "2px solid red"
        confirmPassword.style.border = "2px solid red"
    }
}