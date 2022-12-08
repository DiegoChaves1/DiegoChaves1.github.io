
function calcular() {
    var txtv = document.getElementById('txtvel')
    var res = document.querySelector('div#res')
    var vel = Number(txtv.value)
    res.innerHTML = `Su velocidad actua es <strong>${vel}Km/h</strong> `
    if (vel > 30) {
        Swal.fire ({
            title: "MULTADO",
            html: `Su velocidad es <b>${vel}Km/h</b>`,
            icon: "error"
        })
    } else { (vel < 60)
        res.innerHTML = `Su velocidad actual es <strong>${vel}Km/h BUEN VIAJE</strong>`
    }
    
}