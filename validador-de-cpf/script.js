console.log ("JavaScript carregado");

function validaCPF(cpf) {
    // return true; aqui é para confirmar o cpf, mesmo que não seja válido, só para testar
    //return false;
    // console.log(cpf.length);
    if(cpf.length != 11){
        return false;
    } else {
        var numeros = cpf.substring(0,9); //para isolar os primeiros nove números do cpf
        var digitos = cpf.substring(9); //aqui são tidos em contsa os últmos números a partir dos nove primeiros, ou seja, os dois últimos números, o digito
       
        //console.log("numeros do cpf " + numeros);  aqui é para ler no console o que está sendo processado
        //console.log("dígito do cpf " + digitos);

        var soma = 0; // variável de incremento
        for (var i = 10; i > 1; i--) { //aqui usamos for para percorrer todos os números, de trás pra frente, a partir do décimo número
            soma += numeros.charAt(10 - i) * i; //aqui usamos a função charAt para percorrer os número e parar quando encontrar algo, tudo a partir de um index
            //já que uma string também é uma lista de caracteres. o charAt retorna a posição da string na lista
        }
        // console.log(soma);

        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11); //validação do primeiro dígito
        //aqui queremos saber se o resto de soma/11 é menor que 2, se sim, o resultado será 0. se não, terempos o resto de soma/11 menos 11.

         if (resultado != digitos.charAt(0)) {
             return false;
        }
        

        // console.log(digitos.toString().charAt(0) + " é a primeira posição da variável soma");
        
        soma = 0;
          numeros = cpf.substring(0, 10); // do primeiro caracter até o primeiro dígito verificador

          for (var k = 11; k > 1; k --){
              soma += numeros.charAt(11 - k) * k;
            }

            // console.log(soma);

            resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11); //validação do segundo dígito
            
            if (resultado != digitos.charAt(1)) {
                return false;
             }
             return true;
    }
} 

function validacao (){
    console.log ("iniciando validação do CPF");
    document.getElementById("success").style.display = "none"; 
    document.getElementById("error").style.display = "none";
    // aqui sempre que executarmos a validação ele vai ocultar sucesso 
    //e erro e dependendo do resultado da validação, ele vai exibir um ou o outro

   var cpf = document.getElementById("cpf_digitado").value;
//    console.log(cpf); é a var cpf e não um texto cpf
    // aqui estamos associando o html ao js. o cpf digitado vai ser
    // capturado pelo JS e armazenado dentro desta var

    var resultadoDaValidacao = validaCPF(cpf);

    if (resultadoDaValidacao) {
        // Se queremos saber se uma variável é verdadeira ou falsa podemos 
        // citá-la dentro de um if ou while, sem precisar usar valores booleanos para tal.
        // Aqui associamos uma mensagem no html para confirmar que o número do cpf é válido
        document.getElementById("success").style.display = "block";
//  aqui estamos associando o js ao html, fazendo com que apareça o bloco de mendsagem confirmando o cpf validado
   
    }else{
        document.getElementById("error").style.display = "block";
    }


}

