/* 
Esse script simulara uma bola 8 mágica, com respostas positivas, neutras e negativas
a logica é que uma das frases será selecinada aleatoriamente e exibida ao usuário
*/

function magicReply() {

    //criação das frases dentro de arrays
    const frasesPositivas = ['Está bem certo.', 'Está decidido assim!', 'Sem dúvida.', 'Sim, com certeza.', 'Pode contar com isso.', 'Muito provavelmente.', 'A perpectiva é boa.', 'Sim.', 'Sinais apontam pro sim.']
    const frasesNeutras = ['Resposta incerta, tente novamente.', 'Pergunte novamente mais tarde.', 'Melhor não te contar agora.', 'Não posso prever agora.', 'Se concentre e pergunte novamente.']
    const frasesNegativas = ['Não conte com isso.', 'Minha resposta é "não".', 'Minhas fontes dizem "não".', 'Perspectiva não muito boa.', 'Duvido muito.']

    const magicBall = [frasesPositivas, frasesNeutras, frasesNegativas]
    //seleciona se vai ser positivo, neutro ou negativo
    let randomHumor = Math.floor(Math.random() * magicBall.length) //0 positivo, 1 neutro, 2 negativo
    let selectHumor = magicBall[randomHumor] //transformando o resultado anterior em INDEX, retornara o array inteiro
    let selecionandoReply = Math.floor(Math.random() * selectHumor.length) //gerando numero de Index
    let resposta = selectHumor[selecionandoReply]

    //se o campo de input estiver vazio, nao faz nada
    if (document.getElementById("question").value === "") {
        let imprimindoNaTela = document.getElementById("reply")
        imprimindoNaTela.innerHTML = "Você não digitou nenhuma pergunta."
    } else {
        //mostrando resposta na página
        let imprimindoNaTela = document.getElementById("reply")
        imprimindoNaTela.innerHTML = resposta

        //zerando o campo de input quando recebe a resposta
        let pergunta = document.getElementById("question").value = ''
    }
}

