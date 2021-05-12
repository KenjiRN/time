

function carregar(){
    var msg = document.getElementById('msg')

    var img = document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >=0 && hora<12){
        img.src='pexels-pixabay-209807.jpg'
        document.body.style.background='#ffd60a'
    }else if(hora>=12 && hora<18){
        img.src='pexels-konevi-1335115.jpg'
        document.body.style.background='#fb5607'
    }else{
        img.src='pexels-sanaan-mazhar-3052361.jpg'
        document.body.style.background='#1b4332'
    }

}