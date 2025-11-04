//pegar elementos para horas e data

let elementoHora = document.querySelector(".aero-hora .hora");
let elementoMinuto = document.querySelector(".aero-hora .minutos");
let elementoDiaMes = document.querySelector(".div-data .dia-mes");
let elementoMes = document.querySelector(".div-data .mes");
let elementoAno = document.querySelector(".div-data .ano");

const inserirDataHora = function () {
    //pegar as horas 
    let hoje = new Date()
    //pegar as horas e minutos
    let hora = hoje.getHours()
    let minutos = hoje.getMinutes()

    //pegar datas 
    let dia = hoje.getDate()
    let mes = hoje.getMonth() + 1
    let ano = hoje.getFullYear()


    // tradando valores de formatacao 

    //inserir dados na tela 

    const inserirHora = function () {
        hora <= 9 ? elementoHora.textContent = `0${hora}` : elementoHora.textContent = `${hora}`
    }
    inserirHora()


    const inserirMinuto = function () {
        minutos <= 9 ? elementoMinuto.textContent = `0${minutos}` : elementoMinuto.textContent = `${minutos}`
    }
    inserirMinuto()


    const inserirDiaMes = function () {
        dia <= 9 ? elementoDiaMes.textContent = `0${dia}/` : elementoDiaMes.textContent = `${dia}/`

    }
    inserirDiaMes()

    const inserirMes = function () {
        mes <= 9 ? elementoMes.textContent = `0${mes}/` : elementoMes.textContent = `${mes}/`
      
    }
    inserirMes()

    const inserirAno = function () {

        elementoAno.textContent = ano

    }
    inserirAno()




}

inserirDataHora()

//Atualizando a cada 1 segundo
setInterval(inserirDataHora, 1000);
