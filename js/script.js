var numeros = Array();
var tabela = document.getElementById('num-adcionados');
var input = document.getElementById('num');
var resultado = document.getElementById('res');

function adicionar() {
    var num = Number(input.value);

    if ((num < 1 || num > 100)||num == "") {
        //Não esta dentro do permitido
        alert("[ERRO] Valor inválido!");
    } else {
        if (numeros.indexOf(num) != -1) {
            //Foi verificado que o valor já existe no Array
            alert(`[ERRO] ${num} já foi adicionado!`);
        } else {
            resultado.innerHTML = "";
            numeros.push(Number(num));

            var option = document.createElement('option');
            option.text = `Valor ${num} adicionado!`;
            tabela.appendChild(option)
        }
    }

    input.value = "";
    input.focus();
}

function finalizar(){
    if(numeros.length == 0){
        alert("[ERRO] Insira valores antes de finalizar!");
    } else {
        var quantNum = numeros.length;
        //Procurando o maior valor
        var maior = numeros[0];
        var menor = numeros[0];
        var soma = 0;
        for (var i in numeros) {
            soma += numeros[i];
            if(numeros[i] > maior){
                maior = numeros[i];
            } else if(numeros[i] < menor){
                menor = numeros[i];
            }
        }
        var media = soma/quantNum;
        resultado.innerHTML = `Ao todo, temos ${quantNum} números cadastrados <br>`;
        resultado.innerHTML += `O maior valor informado foi ${maior} <br>`;
        resultado.innerHTML += `O menor valor informado foi ${menor} <br>`;
        resultado.innerHTML += `Somando todos os valores, temos ${soma} <br>`;
        resultado.innerHTML += `A média dos valores digitados é ${media} <br>`;
    }
}



