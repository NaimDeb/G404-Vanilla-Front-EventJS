// 🕳️ Hover size :

//     Créez 4 cases de 200 px par 200 px.
//     Chaque cases contient un texte, des bordures noires de 2 px et un blur de 60 %.
//     Au hover de la souris le blur disparaît et les bordures deviennent rouges.
//     Si je maintiens le clic de la souris sur la case, les dimensions de la case deviennent 400px de large pour 200 px de haut.
//     Quand le clic est relâché la case reprend sa dimension d'origine.


// const cases = document.querySelectorAll(".case").forEach((caseEx4) => {
//     caseEx4.addEventListener("mouseenter", handleMouseEnter)
//     caseEx4.addEventListener("mouseleave", handleMouseLeave)
//     caseEx4.addEventListener("mousedown", handleMouseDown)
//     caseEx4.addEventListener("mouseup", handleMouseUp)
// })

// function handleMouseEnter(event) {
//     event.target.firstElementChild.style.filter = "blur(0px)"
//     event.target.style.border = "2px solid red"

// }
// function handleMouseLeave(event) {
//     event.target.firstElementChild.style.filter = "blur(6px)"
//     event.target.style.border = "2px solid black"

// }

// function handleMouseDown(event) {
//     let caseTarget = event.currentTarget
//     caseTarget.style.width = "400px"

// }
// function handleMouseUp(event) {
//     let caseTarget = event.currentTarget
//     caseTarget.style.width = "200px"

// }


const cases = document.querySelectorAll(".case");

cases.forEach((caseEx4) => {
    ["mouseenter", "mouseleave", "mousedown", "mouseup"].forEach((evenement) =>
        caseEx4.addEventListener(evenement, handleCaseEvents)
    );
});

function handleCaseEvents(event) {
    const caseTarget = event.currentTarget;
    const childOfCase = caseTarget.firstElementChild;

    switch (event.type) {
        case "mouseenter":
            childOfCase.style.filter = "blur(0px)";
            caseTarget.style.border = "2px solid red";
            break;
        case "mouseleave":
            childOfCase.style.filter = "blur(6px)";
            caseTarget.style.border = "2px solid black";
            break;
        case "mousedown":
            caseTarget.style.width = "400px";
            break;
        case "mouseup":
            caseTarget.style.width = "200px";
            break;
    }
}


