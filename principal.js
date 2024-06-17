function carregar(){
    var horas = new Date();
    var agora = horas.getHours();
    var msg = document.getElementById('titulo');
    var fundo = document.body;

    if(agora >= 0 && agora < 12){
        msg.innerHTML = 'Bom dia!';
        fundo.style.backgroundImage = "url('https://i.pinimg.com/originals/23/c7/a7/23c7a7b53f12ea21b1ebfce9d8adf7e8.jpg')";
    }
    else if(agora >= 12 && agora < 18){
        msg.innerHTML = 'Boa tarde!';
        fundo.style.backgroundImage = "url('https://www.papeldeparede.etc.br/fotos/wp-content/uploads/1440_summer-nights-1024x640.jpg')"; // Insira a URL da imagem da tarde
    }
    else{
        msg.innerHTML = 'Boa noite!';
        fundo.style.backgroundImage = "url('https://www.papeldeparede.etc.br/fotos/wp-content/uploads/noite--na-Agua_6777_1920x1200.jpg')"; // Insira a URL da imagem da noite
    }
}
