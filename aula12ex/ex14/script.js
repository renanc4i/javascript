function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var msg2 = window.document.getElementById('msg2')
    var data =  new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} horas`

    if (hora >= 0 && hora < 12) {
        msg2.innerHTML = 'Bom dia!'
        img.src = "imagens/foto-manha.png"
        document.body.style.background = '#94786b'

    } else if (hora >= 12 && hora <= 18) {
        msg2.innerHTML = 'Boa tarde!'
        img.src = "imagens/foto-tarde.png"
        document.body.style.background = '#c7b77b'

    } else {
        msg2.innerHTML = 'Boa noite!'
        img.src = "imagens/foto-noite.png"
        document.body.style.background = '#225c6d'
    }

}
