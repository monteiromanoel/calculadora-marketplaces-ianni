function calcular(){
    let custo = parseFloat(document.getElementById("custo").value);
    let frete = parseFloat(document.getElementById("frete").value);

    if (isNaN(frete) || frete === 0 || frete === undefined || frete === null) {
        frete = 6;
    }


    calcularMercadoLivreClassico(custo, frete)
    calcularMercadoLivrePremium(custo, frete)
    calcularB2W(custo, frete);
    calcularIanni(custo);
    calcularMagalu(custo);
    calcularOlist(custo);
    calcularShopee(custo);
}

function calcularMercadoLivreClassico(custo, frete) {
    let taxa = 0.115;
    let imposto = 0.10;

    let precoVenda = custo * 0.5;

    let porcentagemFinal = 0;
    let precoVendaFinal = 0;

    while (porcentagemFinal <= 1.45) {
        precoVenda += 1;

        let calculoTaxa = precoVenda * taxa;
        let calculoImposto = precoVenda * imposto;
        let taxasFrete = calculoTaxa + calculoImposto + frete;
        let bruto = precoVenda - taxasFrete;
        porcentagemFinal = bruto / custo;
        precoVendaFinal = precoVenda;
    }

    document.getElementById("vendaFinalMlClassico").textContent = precoVendaFinal.toFixed(2);
    document.getElementById("margemFinalMlClassico").textContent = porcentagemFinal.toFixed(2) + "%";
}

function calcularMercadoLivrePremium(custo, frete) {
    let taxa = 0.165;
    let imposto = 0.10;

    let precoVenda = custo * 0.5;

    let porcentagemFinal = 0;
    let precoVendaFinal = 0;

    while (porcentagemFinal <= 1.45) {
        precoVenda += 1;

        let calculoTaxa = precoVenda * taxa;
        let calculoImposto = precoVenda * imposto;
        let taxasFrete = calculoTaxa + calculoImposto + frete;
        let bruto = precoVenda - taxasFrete;
        porcentagemFinal = bruto / custo;
        precoVendaFinal = precoVenda;
    }

    document.getElementById("vendaFinalMlPremium").textContent = precoVendaFinal.toFixed(2);
    document.getElementById("margemFinalMlPremium").textContent = porcentagemFinal.toFixed(2) + "%";
}


function calcularShopee(custo) {
    let taxa = 0.20;
    let imposto = 0.10;
    let tarifaFixa = 3;

    let precoVenda = custo * 0.8;

    let porcentagemFinal = 0;
    let precoVendaFinal = 0;

    while (porcentagemFinal <= 1.51) {
        precoVenda += 1;

        let calculoTaxa = precoVenda * taxa;
        let calculoImposto = precoVenda * imposto;
        let bruto = precoVenda - calculoTaxa - calculoImposto - tarifaFixa;
        porcentagemFinal = bruto / custo;
        precoVendaFinal = precoVenda;
    }

    document.getElementById("vendaFinalShopee").textContent = precoVendaFinal.toFixed(2);
    document.getElementById("margemFinalShopee").textContent = porcentagemFinal.toFixed(2) + "%"; 
}

function calcularOlist(custo, frete) {
    let taxa = 0.21;
    let imposto = 0.10;

    let precoVenda = custo * 0.8;

    let porcentagemFinal = 0;
    let precoVendaFinal = 0;

    while (porcentagemFinal <= 1.45) {
        precoVenda += 1;

        let calculoTaxa = precoVenda * taxa;
        let calculoImposto = precoVenda * imposto;
        let bruto = precoVenda - calculoTaxa - calculoImposto ;
        porcentagemFinal = bruto / custo;
        precoVendaFinal = precoVenda * 1.14;
    }



    document.getElementById("vendaFinalOlist").textContent = precoVendaFinal.toFixed(2);
    document.getElementById("margemFinalOlist").textContent = porcentagemFinal.toFixed(2) + "%"; 
}

function calcularB2W(custo, frete) {
    let taxa = 0.165;
    let imposto = 0.10;

    let precoVenda = custo * 0.5;

    let porcentagemFinal = 0;
    let precoVendaFinal = 0;

    while (porcentagemFinal <= 1.45) {
        precoVenda += 1;

        let calculoTaxa = precoVenda * taxa;
        let calculoImposto = precoVenda * imposto;
        let taxasFrete = calculoTaxa + calculoImposto + frete;
        let bruto = precoVenda - taxasFrete;
        porcentagemFinal = bruto / custo;
        precoVendaFinal = precoVenda;
    }

    document.getElementById("vendaFinalB2W").textContent = precoVendaFinal.toFixed(2);
    document.getElementById("margemFinalB2W").textContent = porcentagemFinal.toFixed(2) + "%";
}

function calcularMagalu(custo) {
    let taxa = 0.16;
    let imposto = 0.10;
    let tarifaFixa = 3;

    let precoVenda = custo * 0.8;

    let porcentagemFinal = 0;
    let precoVendaFinal = 0;

    while (porcentagemFinal <= 1.51) {
        precoVenda += 1;

        let calculoTaxa = precoVenda * taxa;
        let calculoImposto = precoVenda * imposto;
        let bruto = precoVenda - calculoTaxa - calculoImposto - tarifaFixa;
        porcentagemFinal = bruto / custo;
        precoVendaFinal = precoVenda;
    }

    document.getElementById("vendaFinalMagalu").textContent = precoVendaFinal.toFixed(2);
    document.getElementById("margemFinalMagalu").textContent = porcentagemFinal.toFixed(2) + "%"; 
}

function calcularIanni(custo) {
    let taxa = 0.10;
    let imposto = 0.10;

    let precoVenda = custo * 0.8;

    let porcentagemFinal = 0;
    let precoVendaFinal = 0;

    while (porcentagemFinal <= 1.44) {
        precoVenda += 1;

        let calculoTaxa = precoVenda * taxa;
        let calculoImposto = precoVenda * imposto;
        let bruto = precoVenda - calculoTaxa - calculoImposto;
        porcentagemFinal = bruto / custo;
        precoVendaFinal = precoVenda;
    }

    document.getElementById("vendaFinalIanni").textContent = precoVendaFinal.toFixed(2);
    document.getElementById("margemFinalIanni").textContent = porcentagemFinal.toFixed(2) + "%"; 
}