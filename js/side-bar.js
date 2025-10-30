
//Pegando elementos pai
let todosElementos = document.querySelector(".oculto")
let painelBtn = document.querySelector(".painel");
let domesticoBtn = document.querySelector(".domesticos");
let internacionalBtn = document.querySelector(".internacionais");
let blogBtn = document.querySelector(".blog");
let minhaAgendaBtn = document.querySelector(".minha-agenda");
let userBtn = document.querySelector(".user");
let promoBtn = document.querySelector("#promo");
let sairBtn = document.querySelector(".btn-sair");
//Pegando elementos filhos
let painelOculto = document.querySelector("#painel-oculto");
let domesticoOculto = document.querySelector("#domesticos-oculto");
let internacionaisOculto = document.querySelector("#internacionais-oculto");
let blogOculto = document.querySelector("#blog-oculto");
let minhaAgendaOculta = document.querySelector("#minha-agenda-oculta");
let userOculto = document.querySelector("#user-oculto");
let promoOculto = document.querySelector("#promo-oculto");
let sairOculto = document.querySelector("#sair-oculto");


const reajustarTela = function () {



    //painel
    painelBtn.addEventListener("mouseover", function () {

        let tamanhoDaTela = innerWidth;
        if (tamanhoDaTela <= 1000) {
            painelOculto.style.display = "block"

        }

        painelBtn.addEventListener("mouseout", function () {
            painelOculto.style.display = "none"
        })

    })

    //Domesticos
    domesticoBtn.addEventListener("mouseover", function () {

        let tamanhoDaTela = innerWidth;
        if (tamanhoDaTela <= 1000) {
            domesticoOculto.style.display = "block"

        }


        domesticoBtn.addEventListener("mouseout", function () {
            domesticoOculto.style.display = "none"
        })

    })
    //internacional
    internacionalBtn.addEventListener("mouseover", function () {

        let tamanhoDaTela = innerWidth;
        if (tamanhoDaTela <= 1000) {
            internacionaisOculto.style.display = "block"

        }


        internacionalBtn.addEventListener("mouseout", function () {
            internacionaisOculto.style.display = "none"
        })

    })
    //blog
    blogBtn.addEventListener("mouseover", function () {

        let tamanhoDaTela = innerWidth;
        if (tamanhoDaTela <= 1150) {
            blogOculto.style.display = "block"

        }


        blogBtn.addEventListener("mouseout", function () {
            blogOculto.style.display = "none"
        })

    })
    //agenda
    minhaAgendaBtn.addEventListener("mouseover", function () {

        let tamanhoDaTela = innerWidth;
        if (tamanhoDaTela <= 1150) {
            minhaAgendaOculta.style.display = "block"

        }


        minhaAgendaBtn.addEventListener("mouseout", function () {
            minhaAgendaOculta.style.display = "none"
        })

    })


    userBtn.addEventListener("mouseover", function () {

        let tamanhoDaTela = innerWidth;
        if (tamanhoDaTela <= 1150) {
           userOculto.style.display = "block"

        }


        userBtn.addEventListener("mouseout", function () {
            userOculto.style.display = "none"
        })

    })
}

reajustarTela()


console.log(minhaAgendaBtn);

