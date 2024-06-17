function clicar() {
    var email = document.getElementById('email').value;
    var s1 = document.getElementById('senha1').value;
    var s2 = document.getElementById('senha2').value;

    if (email == "" || s1 == "" || s2 == "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Você não preencheu todos os campos!",
            footer: '<a target = "_blank" href="https://gorozinhobr.com.br/">Por que eu não consegui?</a>'
          });
    } else if (s1 == s2) {
      Swal.fire({
        title: "Cadastro concluído!",
        text: "Bem vindo usuário!",
        icon: "success"
      }).then((result) => {
        if (result.isConfirmed) {
          
          location.href = './home.html';
        }
      });
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Senhas incorretas, você digitou ago diferente!",
            footer: '<a target = "_blank" href="https://gorozinhobr.com.br/">Por que eu não consegui?</a>'
          });
    }
  }

function focar1(){
    let f1 = document.getElementById('email').value = ""
}
function focar2(){
    let f2 = document.getElementById('senha1').value = ""
}
function focar3(){
    let f3 = document.getElementById('senha2').value = ""
}

var fundo = document.getElementById('preloader')
var giro = document.getElementById('loading')

setTimeout(function() {
fundo.remove('preloader')
giro.remove('loading')
},1280)

function salvar(){
  Swal.fire({
    title: "Você deseja salvar as mudanças?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Salvar",
    denyButtonText: `Não salvar`,
    
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire("Mudanças salvas!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Mundanças não foram salvas", "", "info");
    }
  });
}