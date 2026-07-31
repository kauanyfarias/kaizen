/* ESTUDAR ISSO */
/* NÃO DEIXA NÚMEROS ABAIXO DE 0 */
document.querySelectorAll('input[type="number"]').forEach(input => {
input.addEventListener('input', () => {
if (input.value < 0) input.value = 0
})
})

function calcular() {
/* INPUTS */
let valorInicial = Number(document.getElementById('valor-inicial').value)
let aporte =Number(document.getElementById('aporte').value)
let taxa = Number(document.getElementById('taxa').value)
let prazo = Math.floor(Number(document.getElementById('prazo').value))
let periodo = document.getElementById('periodo').value
/* RESPOSTAS */
const valorInvestido = document.querySelector('p#valor-investido')
const jurosGanhos = document.querySelector('p#juros-ganhos')
const valorFinal = document.querySelector('p#valor-final')
/* PERFORMACE */
const retornoTotal = document.getElementById('retorno-total')
const tempoDuplicacao = document.getElementById('tempo-duplicacao')
const jurosSobreInvestimento = document.getElementById('juros-sobre-investimento')

if (periodo == 'meses'){
    /* VALOR FINAL */
    const montante = ((valorInicial * ((1+(taxa/100))**(prazo/12))) + (aporte * ((1+(taxa/100))**(prazo/12)-1)/((1+(taxa/100))**(1/12)-1)))
    const resultadoMontante = montante.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
    valorFinal.innerText = `${resultadoMontante}`

    /* VALOR INVESTIDO */
    const totalInvestido = (valorInicial + (aporte * prazo))
    const resultadoTotalInvestido = totalInvestido.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
    valorInvestido.innerText = `${resultadoTotalInvestido}`

    /* JUROS GANHOS */
    const totalJurosGanhos = montante - totalInvestido;
    const resultadoJurosGanhos = totalJurosGanhos.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
    jurosGanhos.innerText = `${resultadoJurosGanhos}`  

    /* RETORNO TOTAL */
    const retornoTotalPct = ((montante - totalInvestido) / totalInvestido) * 100
    retornoTotal.innerText = `Retorno total: ${retornoTotalPct.toFixed(2)}%`

    /* TEMPO DE DUPLICAÇÃO */
    const tempoDuplicacaoAnos = 72 / taxa;
    tempoDuplicacao.innerText = `Tempo de duplicação: ${tempoDuplicacaoAnos.toFixed(0)} anos.`

    /* JUROS SOBRE INVESTIMENTO */
    const jurosSobreInvestimentoPct = (totalJurosGanhos / montante) * 100
    jurosSobreInvestimento.innerText = `Juros sobre investimento: ${jurosSobreInvestimentoPct.toFixed(2)}%`
} else{
    /* VALOR FINAL */
    const montante = (valorInicial * (1 + taxa / 100) ** prazo + aporte * (((1 + taxa / 100) ** prazo - 1) / ((1 + taxa / 100) ** (1 / 12) - 1)))
    const resultadoMontante = montante.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
    valorFinal.innerText = `${resultadoMontante}`

    /* VALOR INVESTIDO */
    const totalInvestido = (valorInicial + (aporte * prazo * 12))
    const resultadoTotalInvestido = totalInvestido.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
    valorInvestido.innerText = `${resultadoTotalInvestido}`

    /* JUROS GANHOS */
    const totalJurosGanhos = montante - totalInvestido;
    const resultadoJurosGanhos = totalJurosGanhos.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
    jurosGanhos.innerText = `${resultadoJurosGanhos}`

    /* RETORNO TOTAL */
    const retornoTotalPct = ((montante - totalInvestido) / totalInvestido) * 100
    retornoTotal.innerText = `Retorno total: ${retornoTotalPct.toFixed(2)}%`

    /* TEMPO DE DUPLICAÇÃO */
    const tempoDuplicacaoAnos = 72 / taxa;
    tempoDuplicacao.innerText = `Tempo de duplicação: ${tempoDuplicacaoAnos.toFixed(0)} anos.`

    /* JUROS SOBRE INVESTIMENTO */
    const jurosSobreInvestimentoPct = (totalJurosGanhos / montante) * 100
    jurosSobreInvestimento.innerText = `Juros sobre investimento: ${jurosSobreInvestimentoPct.toFixed(2)}%`
}
}

const inputs = document.querySelectorAll('input[type=number]')

inputs.forEach(function(input){
    input.addEventListener('input', function(){
        if(input.value.length > 0){
            input.classList.add('valido')
        } else{
            input.classList.remove('valido')
        }
    })
})


