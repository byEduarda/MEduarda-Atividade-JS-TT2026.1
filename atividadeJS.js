function processarNotas(notasString){
    let notasNumericas = notasString.split(',').map(nota => parseFloat(nota.trim())); //quebra a string em um array e converte para numeros

    return notasNumericas
}

function calcularMediaNotas(notasString){
    
    let notasNumericas = processarNotas(notasString);

    let somaNotas = 0;

    for (let i = 0; i < notasNumericas.length; i++) {
        somaNotas += notasNumericas[i];
    }

    let mediaTurma = somaNotas / notasNumericas.length;
    
    return mediaTurma
}

function mostrarSituacaoAluno(notasString){

    console.log(situacaoAluno)
}

//mostrarSituacaoAluno()