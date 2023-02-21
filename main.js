const sabadoManana = 30
const domingoManana = 10
const sabadoTarde = 30
const domingoTarde = 60
let totalSabado = sabadoManana + sabadoTarde;
let totalDomingo = domingoManana + domingoTarde;
let totalFinde = totalSabado + totalDomingo;
// console.log("sabado",totalSabado)
// console.log("domingo",totalDomingo)


let btn = document.getElementById("btn")
btn.addEventListener("click", () => {
    document.getElementById("total-finde").innerHTML = totalFinde
} )

// Manera obosleta, se utiliza actualmente la anterior
// let btn = document.getElementById("btn")
// btn.addEventListener("click", clicked)
// function clicked() {
//     document.getElementById("total-finde").innerHTML = totalFinde
// }



document.getElementById("num-sab-manana").innerHTML = sabadoManana
document.getElementById("num-dom-manana").innerHTML = domingoManana
document.getElementById("num-sab-tardes").innerHTML = sabadoTarde
document.getElementById("num-dom-tardes").innerHTML = domingoTarde
document.getElementById("total-sabado").innerHTML = totalSabado
document.getElementById("total-domingo").innerHTML = totalDomingo

