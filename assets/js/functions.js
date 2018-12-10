$( document ).ready(function() {
  $("#btnCadastrar").click(function () {
    var nome = document.getElementById('nomeCadastro');
    var email = document.getElementById('emailCadastro');
    window.alert(nome.value + ' seja bem vinda(o) ao AcolheDoulas. \n Em breve entraremos em contato através do e-mail: ' + email.value + ".");
  });

  // Get started!

});

