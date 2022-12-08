function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var date = new Date()
    var hora = date.getHours()
    var minutos = date.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'morn.jpg' 
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'after.png'
    } else {
        //boa noite
        img.src = 'nigh.jpg'
    } 

}