/*Crie uma função que recebe dois números e qual operação aritmética deve fazer. Deverá devolver o resultado desta operação com os dois números.*/

/*
Lógica:
var numero1 = parseInt(prompt("Digite o primeiro número: "));
var numero2 = parseInt(prompt("Digite o segundo número: "));
var operacao = prompt("Digite o símbolo da operação desejada conforme segue: + mais, - menos, / divisão, * multiplicação")

if (operacao == "+"){
    var resultado = numero1 + numero2
    alert(numero1 + operacao + numero2 + " = " + resultado )
}

if (operacao == "-"){
    var resultado = numero1 - numero2
    alert(numero1 + operacao + numero2 + " = " + resultado )
}

if (operacao == "/"){
    var resultado = numero1 / numero2
    alert(numero1 + operacao + numero2 + " = " + resultado )
}

if (operacao == "*"){
    var resultado = numero1 * numero2
    alert(numero1 + operacao + numero2 + " = " + resultado )
}*/

function calcular(operacao,num1,num2){
    var resultado = 0;

    switch (operacao) {
        case "+":
            resultado = num1 + num2;
            break;
        
        case "-":
            resultado = num1 - num2;
            break;

        case "*":
            resultado = num1 * num2;
                break;
        case "/":
            resultado = num1 / num2;
            break;
    
        default:
            return "somente as 4 operações arit.";
    }
    return result
}


/*Crie uma função em JS que recebe um número de tabuada. A função deverá retornar todos os resultados da tabuada passada. */

var numero = parseInt(prompt("Digite o número da tabuada que deseja consultar"))
function tabuada(numero){ 
    console.log ("tabuada do " + numero);
    console.log ("_____________________");

    for (var i = 1; i <= 10; i++)
    var resultado = i*numero
   
    console.log(numero + " X " + i + " = " + resultado )
};

/*Crie uma função que recebe alguns números de telefone e imprima na tela cada número. 

ex. 
var phones = '519595959595,51848848448,988498766,959595959';

	use a função split para quebrar os números em um array.
	use a função array.length para pegar o tam do array.*/


function listaTel(){   
   var phones = '519595959595,51848848448,988498766,959595959';
   var arrPhones = phones.split(",");

    for(i = 0; i < arrPhones.length; i++){
    console.log(`fone ${i+1}: ${arrPhones[i]}`)
    }
} 

/*Crie uma função que receba um número binário e retorne o decimal correspondente.

Ex. O usuário passou 1010 e a função retornou 10.

Dicas: 
Atribua o binário para um array, onde cada digito será guardado num indice do array.
para cada elemento, faça  elemento * 2 na elevado a 2. (a*(b**p)).. ** é potenciação.
tome cuidado com o p (posição) do algarismo. Pois o primeiro númeor que será passado estará na última posição do array.*/

function convertDecimal (numero){
    //pegar o numero e converter para array
    //onde cada digito ficará numa posição

    var arrNumero = numero.split("");
    var posicao = arrNumero.length -1;
    var resultDeCadaAlgarimo = 0;
    var resultFinal = 0;

    for(i=0;i<arrNumero.length;i++){
        console.log(`posicao ${i} = ${arrNumero[i]}`);
        console.log(`posicao ${posicao} = ${arrNumero[i]}`);
        //(a*b elevado a posição)
        resultDeCadaAlgarimo = (arrNumero[i] * (2**posicao));
        resultFinal = resultFinal + resultDeCadaAlgarimo;
        posicao--;
    }
    return resultFinal; 
    
}



 
   
    
 

