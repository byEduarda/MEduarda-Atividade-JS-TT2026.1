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

    let notasNumericas = processarNotas(notasString);
    let mediaTurma = calcularMediaNotas(notasString);
    let situacaoAluno = {};

    for (let i = 0; i < notasNumericas.length; i++) {
        let nota = notasNumericas[i];
        let situacao = "";

        if (nota >= 5.0) {
            situacao += "Aprovado";
        } else {
            situacao += "Reprovado";
        }

        if (nota > mediaTurma) {
            situacao += " e Acima da media da turma";
        } else {
            situacao += " e Abaixo da media da turma";
        }

        situacaoAluno[nota] = situacao;
    }
    console.log(situacaoAluno)
}

mostrarSituacaoAluno("7.5, 8.0, 6.2, 9.5, 4.0")