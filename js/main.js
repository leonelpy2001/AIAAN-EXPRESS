//pegar elemento btns
let btnChegadas = document.querySelector(".chegadas")
let btnPartidas = document.querySelector(".partidas")

// pegar elementos para lista de voos 
let listagem = document.querySelector(".lista-de-voos")
//pegar elemento do modal user 
let btnChamarModal = document.querySelector(".user")
let iconeUser = document.querySelector(".user i")
let modalUsuario = document.querySelector(".section-user-modal-btn")
let btnFechar = document.querySelector("#fechar")


// pegar elementos do botao de navegacao
let navUserBtn = document.querySelector("#nav-user")
// importar db 
import dataBaseVoos from "./lista-de-voos.js";


const colocarBordaBtns = () => {

    btnChegadas.addEventListener("click", function () {

        btnChegadas.style.border = "2px solid"
        btnPartidas.style.border = "2px solid transparent"
    })

    btnPartidas.addEventListener("click", function () {
        btnPartidas.style.border = "2px solid "
        btnChegadas.style.border = "2px solid transparent"
    })

}
colocarBordaBtns();


const chamarEfeixarModalUser = function () {
    function chamarModalUser() {
        btnChamarModal.onclick = function () {

            iconeUser.setAttribute("class", "bxs-user")
            document.body.style.overflowY = "hidden"
            btnChamarModal.style.backgroundColor = "rgb(232, 232, 232)"
            modalUsuario.classList.remove("hide")

        }
    }
    chamarModalUser()

    function fecharModalUser(params) {
        btnFechar.onclick = function () {
            document.body.style.overflowY = "scroll"
            btnChamarModal.style.backgroundColor = "rgba(255, 255, 255, 1)"
            iconeUser.setAttribute("class", "bx-user")
            modalUsuario.classList.add("hide")
        }
    }
    fecharModalUser()


    navUserBtn.onclick = function (params) {
        document.body.style.overflowY = "hidden"
        modalUsuario.classList.remove("hide")

    }


}
chamarEfeixarModalUser()



















// listagem de dados
const VerificarLargura = function () {
    let largura = innerWidth
    //verificando o tamanho da tela para adaptacao dos textos longos
    if (largura <= 800) {
        listagem.innerHTML = dataBaseVoos.map(result => `<li>
                        <div class="li-div-img-content">
                            <img src="${result?.companiaLogo}">
                            <div class="div-company-nome-data">
                                <p>${result?.companiaNome.length > 6 ? result.companiaNome.slice(0, 6) + "..." : result.companiaNome.slice(0, 6)}</p>
                                <span class="hora">${result?.hora}</span>
                            </div>
                        </div>


                        <p class="provincia">${result?.proviniencia.length > 5 ? result.proviniencia.slice(0, 5) + "..." : result?.proviniencia}</p>

                        <div class="div-detalhes">

                            <img src="${result?.icone}" alt="chegada alt">
                            <p class="estado">${result?.estado}</p>

                        </div>


                    </li>

    ` ).join("")
    } else {
        listagem.innerHTML = dataBaseVoos.map(result => `<li>
                        <div class="li-div-img-content">
                            <img src="${result?.companiaLogo}">
                            <div class="div-company-nome-data">
                                <p>${result?.companiaNome}</p>
                                <span class="hora">${result?.hora}</span>
                            </div>
                        </div>


                        <p class="provincia">${result?.proviniencia}</p>

                        <div class="div-detalhes">

                            <img src="${result?.icone}" alt="chegada alt">
                            <p class="estado">${result?.estado}</p>

                        </div>


                    </li>

    ` ).join("")
    }
}
VerificarLargura()
//verificando a o tamanho da tela a cada 1s
setInterval(VerificarLargura, 1000)


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(() => console.log('Service Worker registrado com sucesso!'))
        .catch(err => console.log('Erro ao registrar SW:', err));
}

