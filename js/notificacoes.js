

const mostrarNotificaoes = function () {

    const mostrarNoty = function () {
        const noty = new Notification("Gospress", {
            body: "Voo com origem Huambo chegou a nossa estação!",
            icon: "./imgs/logo/gospress_logo.png",
            requireInteraction: "ver"
        })
        return noty
    }

    const permissao = function () {

        if (Notification.permission === "granted") {
            mostrarNoty()
        } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    mostrarNoty()

                }
            })
        }

    }
    permissao()

}
mostrarNotificaoes()
