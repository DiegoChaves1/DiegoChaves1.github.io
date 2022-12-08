function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('textano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('{ERROR} Verifica los datos.')
    } else {
        var fsex = document.getElementsByName('radesex')
        var idade = ano - Number(fano.value)
        var genero_masculino = document.getElementById('masculino')
        var genero_feminino = document.getElementById('feminino')
        var img = document.createElement ('img')
        img.setAttribute('id' , 'foto')        
        if (genero_masculino.checked) {
            var genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                //crianca
                img.setAttribute('src', 'bebenino.jpg')
                img.style.width=`250px`
                img.style.height=`250px`
                img.style.borderRadius=`50%`
                img.style.objectFit=`cover`
            } else if (idade < 24) {
                // jovem
                img.setAttribute('src', 'jovenh.jpg')
                img.style.width=`250px`
                img.style.height=`250px`
                img.style.borderRadius=`50%`
                img.style.objectFit=`cover`
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'viejo omem.png')
                img.style.width=`250px`
                img.style.height=`250px`
                img.style.borderRadius=`50%`
                img.style.objectFit=`cover`
            }
                
        } else if (genero_feminino.checked) {
            var genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                //crianca
                img.setAttribute('src', 'bebenina.jpg')
                img.style.width=`250px`
                img.style.height=`250px`
                img.style.borderRadius=`50%`
                img.style.objectFit=`cover`
            } else if (idade => 12 && idade < 24) {
                // jovem
                img.setAttribute('src', 'joven mujer.jpg')
                img.style.width=`250px`
                img.style.height=`250px`
                img.style.borderRadius=`50%`
                img.style.objectFit=`cover`
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'vieja mujer.jpeg')
                img.style.width=`250px`
                img.style.height=`250px`
                img.style.borderRadius=`50%`
                img.style.objectFit=`cover`
            }
        }
        res.innerHTML = (`Você é ${genero} com ${idade} anos`)
        res.appendChild(img)
        }
              
        
}