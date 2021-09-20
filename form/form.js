var submit = document.querySelector("#submit");
submit.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form");

    var usuario = formData(form);

    // var erros = validaPaciente(paciente);

    // if (erros.length > 0) {
    //     exibeMensagensDeErro(erros);

    //     return;
    // }

    // adicionaPacienteNaTabela(paciente);

    form.reset();

    // var mensagensErro = document.querySelector("#mensagens-erro");
    // mensagensErro.innerHTML = "";

});

function formData(form) {

    var usuario = {
        nome:form.nome.value,
        email:form.email.value,
        telefone: form.telefone.value
    }
    console.log(usuario);

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

// function validaPaciente(paciente) {

//     var erros = [];

//     if (paciente.nome.length == 0) {
//         erros.push("O nome não pode ser em branco");
//     }

//     if (paciente.gordura.length == 0) {
//         erros.push("A gordura não pode ser em branco");
//     }

//     if (paciente.peso.length == 0) {
//         erros.push("O peso não pode ser em branco");
//     }

//     if (paciente.altura.length == 0) {
//         erros.push("A altura não pode ser em branco");
//     }

//     if (!validaPeso(paciente.peso)) {
//         erros.push("Peso é inválido");
//     }

//     if (!validaAltura(paciente.altura)) {
//         erros.push("Altura é inválida");
//     }

//     return erros;
// }

// function exibeMensagensDeErro(erros) {
//     var ul = document.querySelector("#mensagens-erro");
//     ul.innerHTML = "";

//     erros.forEach(function(erro) {
//         var li = document.createElement("li");
//         li.textContent = erro;
//         ul.appendChild(li);
//     });
// }

// function adicionaPacienteNaTabela(paciente) {
//     var pacienteTr = montaTr(paciente);
//     var tabela = document.querySelector("#tabela-pacientes");
//     tabela.appendChild(pacienteTr);
// }