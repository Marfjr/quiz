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
   
 
    // adicionaPacienteNaTabela(paciente);
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

// function montaTr(paciente) {
//     var pacienteTr = document.createElement("tr");
//     pacienteTr.classList.add("paciente");

//     pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
//     pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
//     pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
//     pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
//     pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

//     return pacienteTr;
// }

// function montaTd(dado, classe) {
//     var td = document.createElement("td");
//     td.classList.add(classe);
//     td.textContent = dado;

//     return td;
// }

function validaUsuario(usuario) {

    var erros = [];

    if (usuario.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (usuario.email.length == 0) {
        erros.push("O email não pode ser em branco");
    }

    if (usuario.telefone.length == 0) {
        erros.push("O telefone não pode ser em branco");
    }

   

    return erros;
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

// function adicionaPacienteNaTabela(paciente) {
//     var pacienteTr = montaTr(paciente);
//     var tabela = document.querySelector("#tabela-pacientes");
//     tabela.appendChild(pacienteTr);
// }



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
    // document.getElementById("msgemail").innerHTML="E-mail válido";
    // console.log("E-mail valido");
    console.log('nada')
    }
    else{
    document.getElementById("msgemail").innerHTML="<font color='yellow'>Formato de email inválido </font>";
    console.log("Formato de email inválido");
    return erros
    }
    }