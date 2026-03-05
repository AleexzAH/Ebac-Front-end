const alunos = [
    {Nome: 'Paulo', Media: 8,},
    {Nome: 'Alexander', Media: 9,},
    {Nome: 'Magda', Media: 8,},
    {Nome: 'Enzo', Media: 5,},
    {Nome: 'Gabriela', Media: 2,},
    {Nome: 'Linda', Media: 10,}];

const aprovados = alunos.filter((itemDeBusca) => {
    return itemDeBusca.Media >= 6;
})


function exibeAprovados(lista){
     for (let i = 0; i < lista.length; i++){
        console.log(`${lista[i].Nome} aprovado com ${lista[i].Media}`);
     }
}

function exebirClassificacaoFinal(lista){
    for (let i = 0; i < lista.length; i++){
        if (lista[i].Media >= 6){
            console.log(`Parabéns ${lista[i].Nome} você foi aprovado com média: ${lista[i].Media}.`)
            console.log("=============================================================================")
        } else {
            console.log(`Sinto muito ${lista[i].Nome} você foi não atingiu a nota mínima com média: ${lista[i].Media}.`)
            console.log("=============================================================================")
        }
    }
}

exibeAprovados(aprovados)
//exebirClassificacaoFinal(alunos);

