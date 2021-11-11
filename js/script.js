

let inputAdultosQueBebem = document.getElementById("adultosquebebem");
let inputAdultosQueNaoBebem = document.getElementById("adultosquenaobebem");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function cervejaPorPessoa(duracao)
{
    if(duracao >= 6)
    {
        return 2000;
    }
    else 
    {
        return 1200;
    }
}

function bebidaPorPessoa(duracao)
{
    if(duracao >= 6)
    {
        return 1500;
    }
    else 
    {
        return 1000;
    }
}

function carnePorPessoa(duracao)
{
    if(duracao >= 6)
    {
        return 550;
    }
    else 
    {
        return 400;
    }
}

function calcular()
{
    let adultosquebebem = inputAdultosQueBebem.value;
    let adultosquenaobebem = inputAdultosQueNaoBebem.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    let adultos = parseInt(adultosquebebem) + parseInt(adultosquenaobebem);

    
    let quantidadeTotalDeCarne = carnePorPessoa(duracao) * adultos  + (carnePorPessoa(duracao) / 2 * criancas);
    
    let quantidadeTotalDeCerveja = cervejaPorPessoa(duracao) * adultosquebebem;

    let quantidadeTotalDeBebidasNaoAlcoolicas = bebidaPorPessoa(duracao) * adultosquenaobebem + (bebidaPorPessoa(duracao) / 2 * criancas);


    resultado.innerHTML = `<div class="resultado"><img src = "./pictures/4c32538ed7b8a8db71504dfef509cb09.png"/><p>${quantidadeTotalDeCarne / 1000} Kg de carne</p><div>`
    resultado.innerHTML += `<div class="resultado"><img src = "./pictures/2895432.png"/><p>${Math.ceil(quantidadeTotalDeCerveja / 355)} Latas de Cerveja</p></div>`
    resultado.innerHTML += `<div class="resultado"><img src = "./pictures/refri.png"/><p>${ Math.ceil (quantidadeTotalDeBebidasNaoAlcoolicas / 2000)} Refrigerante de 2L </p></div>`

}

