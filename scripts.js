function sortear() {

    const input1 = Math.ceil(document.querySelector('.input-min').value);  //pegando somente o valor do primeiro input, arredonda o numero minimo pra cima.
    const input2 = Math.floor(document.querySelector('.input-max').value);  //pegando somente o valor do segundo input,arredonda o numero maximo pra pra baixo.

    if(input1>=input2){
        alert("O valor mínimo deve ser menor que o valor máximo.")
    }else{
    const resultado= Math.floor(Math.random() * (input2 - input1 + 1)) + input1; //Aqui faz o sorteio do numero, fazendo o calculo entre os inputs.

    //alert("O número sorteado foi: "+resultado)
    document.getElementById('resultado').textContent = `O número sorteado é:   ${resultado}.`; //Aqui lança na tela o resultado em um H3 que esta setado como empty.
    document.getElementById('parabens').textContent = `Parabéns ao vencedor!`; //Aqui lança na tela "parabens ao vencedor."
    }
  
console.log(resultado) //mostra no console o resultado.

}

