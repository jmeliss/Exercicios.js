let Notas = []

function adicionarnotas () {

}
function AtualizarListaNotas () {

} 
function CalcularMedia (){
    let Notas
    let SomatoriaNotas = 0;
    let Media = 0;
    for ( let index = 0; index < SomatoriaNotas.lenght; index >=1) {
SomatoriaNotas = SomatoriaNotas + Notas [index]

    }
Media = SomatoriaNotas / Notas.lenght;
if (media > 6){
document.getElementById('result').
textContent = `MEDIA: ${Media.toFixed(2)} - ESTUDANTE APROVADO!`
} else {
    document.getElementById('result').
textContent = `MEDIA: ${Media.toFixed (2)} - ESTUDANTE REPROVADO!`

}
}