function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 14

    var saudacao = window.document.getElementById('sauda')

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = "fotomanha.png"
        document.body.style.background = '#d1c095'
        saudacao.innerHTML = 'Bom dia!'        
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = "fototarde.png"
        document.body.style.background = '#ff5a06'
        saudacao.innerHTML = 'Boa tarde!'  
    } else {
        //Boa noite
        img.src = "fotonoite.png"
        document.body.style.background = '#082643'
        saudacao.innerHTML = 'Boa noite!'  
    }
}