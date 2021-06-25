setInterval(function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()
var segundos = data.getSeconds()
msg.innerHTML = (`Agora são ${hora}:${minuto}:${segundos}`)
if (hora >= 0 && hora < 12) {
    // Bom dia
    img.src = 'manha1.png'
    document.body.style.backgroundImage = "url('manha.png')";
} else if (hora >= 12 && hora < 18) {
    //Boa tarde
    img.src = 'tarde1.png'
    document.body.style.backgroundImage = "url('tardefundo.png')";
} else {
    //Boa noite
    img.src = 'noite1.png'
    document.body.style.backgroundImage = "url('noite.png')";
    }
}
)