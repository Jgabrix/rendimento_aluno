//Acessando o HTML com o Dom
let nome_aluno = document.getElementById('nome')
let serie_aluno = document.getElementById('serie')
let nota1_aluno = document.getElementById('nota1') 
let nota2_aluno = document.getElementById('nota2')
let campoResultado = document.getElementById('resultado')


//Evento
function calcular() {
    if(nome_aluno.value == ''|| serie_aluno.value == '' || nota1_aluno.value == '' || nota2_aluno.value == ''){
        alert('preencha o(s) campo(s) corretamente!')
    }else {
        const nome = String(nome_aluno.value)
        const serie = String(serie_aluno.value)
        const nota1 = Number(nota1_aluno.value)
        const nota2 = Number(nota2_aluno.value)
        const media = (nota1 + nota2)/2

        campoResultado.style.background = 'white'
        if(media >= 7) {
           campoResultado.innerHTML = `O aluno ${nome} do ${serie} está <strong>APROVADO</strong>; media:${media}`
           campoResultado.style.color = 'green'
           campoResultado.style.border = 'solid black 3px'
        }else if(media < 6) {
            campoResultado.innerHTML = `O aluno ${nome} do ${serie} está <strong>REPROVADO</strong>; media:${media}`
            campoResultado.style.color = 'red'
            campoResultado.style.border = 'solid black 3px'
        }else {
            campoResultado.innerHTML = `O aluno ${nome} do ${serie} está <strong>RECUPERAÇÃO</strong>; media:${media}`
            campoResultado.style.color = 'yellow'
            campoResultado.style.border = 'solid black 3px'
        }
    }
}