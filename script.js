const mensagem = document.getElementById("mensagem")
const body = document.querySelector("body").appendChild(mensagem)
const button = document.querySelector("button");

button.addEventListener("click", tratarBotao);

function tratarBotao(){
    const objetoSomando = somaMinhaBarra()
    mensagem.innerHTML = "O dado foi rolado 1000 vezes!"
    montandoGrafico(objetoSomando)
    
}

function rollingDice(){
    const dice1 = Math.floor(Math.random() * (7 - 1) + 1)
    const dice2 = Math.floor(Math.random() * (7 - 1) + 1)
    const soma = dice1 + dice2
    return soma
}
rollingDice()

function arrayDeSoma(){
    let array = []
    for (let i = 0; i < 1000; i++){
       array.push(rollingDice())
    }
    return array

}
arrayDeSoma()

function obterObjetoInicializado() {
    return {
    2: 0, 
    3: 0, 
    4: 0,  
    5: 0, 
    6: 0, 
    7: 0,  
    8: 0,  
    9: 0,  
    10: 0,  
    11: 0,  
    12: 0,
    }
    
}

function somaMinhaBarra(){
    const array = arrayDeSoma()
    const objeto = obterObjetoInicializado()
    for (let i = 0; i < array.length; i++){
        objeto[array[i]]++
    } 
    return objeto
}

function montandoGrafico(objeto){
    const barra2 = document.getElementById("barra2")  
    preencherBarra(barra2, objeto[2])

    const barra3 = document.getElementById("barra3")
    preencherBarra(barra3, objeto[3])

    const barra4 = document.getElementById("barra4")
    preencherBarra(barra4, objeto[4])

    const barra5 = document.getElementById("barra5")
    preencherBarra(barra5, objeto[5])

    const barra6 = document.getElementById("barra6")
    preencherBarra(barra6, objeto[6])

    const barra7 = document.getElementById("barra7")
    preencherBarra(barra7, objeto[7])

    const barra8 = document.getElementById("barra8")
    preencherBarra(barra8, objeto[8])

    const barra9 = document.getElementById("barra9")
    preencherBarra(barra9, objeto[9])
    
    const barra10 = document.getElementById("barra10")
    preencherBarra(barra10, objeto[10])

    const barra11 = document.getElementById("barra11")
    preencherBarra(barra11, objeto[11])

    const barra12 = document.getElementById("barra12")
    preencherBarra(barra12, objeto[12])

    
}

function preencherBarra(barra, qtd) {
    barra.innerHTML = `${qtd}`
    barra.style.height = `${qtd}px`
}

