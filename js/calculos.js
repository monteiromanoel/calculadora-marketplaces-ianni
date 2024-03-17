function calcular(){
    let custo = parseFloat(document.getElementById("custo").value);
    let frete = parseFloat(document.getElementById("frete").value);
    let sku = document.getElementById("sku").value.trim();

    if (isNaN(frete) || frete === 0 || frete === undefined || frete === null) {
        frete = 6;
    }

    let mlClassico = calcularMercadoLivreClassico(custo, frete);
    let mlPremium = calcularMercadoLivrePremium(custo, frete);
    let b2w = calcularB2W(custo, frete);
    let ianni = calcularIanni(custo);
    let magalu = calcularMagalu(custo);
    let olist = calcularOlist(custo, frete);
    let shopee = calcularShopee(custo);

    adicionarLinhaTabela(sku, custo, [mlClassico, mlPremium, b2w, magalu, olist, shopee, ianni]);

    document.getElementById("custo").value = "";
    document.getElementById("frete").value = "";
    document.getElementById("sku").value = "";

}

function adicionarLinhaTabela(sku, custo, valores) {
    let tabela = document.getElementById("resultadoTabela");
    let newRow = tabela.insertRow();

    // Inserir o SKU e o Custo nas primeiras células da linha
    let skuCell = newRow.insertCell();
    skuCell.textContent = sku;

    let custoCell = newRow.insertCell();
    custoCell.textContent = custo.toFixed(2);

    // Inserir os valores nas células restantes
    for (let i = 0; i < valores.length; i++) {
        let newCell = newRow.insertCell();
        // Verificar se o valor é um número antes de chamar toFixed
        let value = isNaN(valores[i]) ? valores[i] : valores[i].toFixed(2);
        newCell.textContent = value;
    }
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

    return precoVendaFinal;
    //document.getElementById("margemFinalMlClassico").textContent = porcentagemFinal.toFixed(2) + "%";
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

    return precoVendaFinal;
    //document.getElementById("margemFinalMlPremium").textContent = porcentagemFinal.toFixed(2) + "%";
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

    return precoVendaFinal;
    //document.getElementById("margemFinalShopee").textContent = porcentagemFinal.toFixed(2) + "%"; 
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

    return precoVendaFinal;
    //document.getElementById("margemFinalOlist").textContent = porcentagemFinal.toFixed(2) + "%"; 
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

    return precoVendaFinal;
    //document.getElementById("margemFinalB2W").textContent = porcentagemFinal.toFixed(2) + "%";
}

function calcularMagalu(custo) {
    /* 
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
    */
    let precoVendaFinal = custo * 2.08;
    return precoVendaFinal;
    //document.getElementById("margemFinalMagalu").textContent = porcentagemFinal.toFixed(2) + "%"; 
}

function calcularIanni(custo) {
    /* 
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
    */
    let precoVendaFinal = custo * 1.8;
    return precoVendaFinal;
    //document.getElementById("margemFinalIanni").textContent = porcentagemFinal.toFixed(2) + "%"; 
}