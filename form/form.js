var submit = document.querySelector("#submit");
submit.addEventListener("click", function(event) {
    event.preventDefault();
 
    var form = document.querySelector("#form");

    var usuario = formData(form);

    var erros = validaUsuario(usuario);

    if (erros.length > 0) {
     exibeMensagensDeErro(erros);
        return;
    }
   

    console.log(usuario);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function formData(form) {

    var usuario = {
        nome:form.nome.value,
        email:form.email.value,
        telefone: form.telefone.value
    }
    return usuario;
}


function validaUsuario(usuario) {

    var erros = [];

    if (usuario.nome.length == 0 | usuario.email.length == 0 | usuario.telefone.length == 0) {
        erros.push("Por favor, preencha todos os campos corretamente");
        return erros;
    }
/*
    if (usuario.email.length == 0) {
        erros.push("O email não pode ser em branco");
    }

    if (usuario.telefone.length == 0) {
        erros.push("O telefone não pode ser em branco");
    }

   */

    
    else {
        location.href = 'index-3.html'; 
    }
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

/*
function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
   
    console.log('nada')
    }
    else{
    document.getElementById("msgemail").innerHTML="<font color='write'>Formato de email inválido </font>";
    console.log("Formato de email inválido");
    return erros
    }
    }
    */