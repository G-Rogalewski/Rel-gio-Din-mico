function load() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    tempo = setInterval(load,1000)
    if (min < 10) {
        min = "0" + data.getMinutes()
    }

    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Bom Dia! Agora são ${hora}:${min}h.`
        img.src = 'img/manha.png'
        document.body.style.background = '#F5F37C'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `Boa Tarde! Agora são ${hora}:${min}h.`
        img.src = 'img/tarde.png'
        document.body.style.background = '#68B3D1'
    } else {
        msg.innerHTML = `Boa Noite! Agora são ${hora}:${min}h.`
        img.src = 'img/noite.png'
        document.body.style.background = '#04213F'
    }
    
}
