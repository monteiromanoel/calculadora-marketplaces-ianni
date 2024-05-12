function calcular() {
    let custo = parseFloat(document.getElementById("custo").value);
    let frete = parseFloat(document.getElementById("frete").value);
    let sku = document.getElementById("sku").value.trim();


    if (isNaN(frete) || frete === 0 || frete === undefined || frete === null) {
        frete = 6;
    };
    
    if (isNaN(custo)) {
        alert("Favor, adicione um valor de custo!");
        return;
    }

    /*
    let porcentagemFinalMl = 1.45;
    let porcentagemFinalB2W = 1.45;
    let porcentagemFinalShopee = 1.51;
    let porcentagemFinalMagalu = 1.51;
    let porcentagemFinalOlist = 1.45;
    let porcentagemFinalIanni = 1.44;
    */

    let porcentagemFinal = 0;
    let precoVendaFinal = 0;
    let precoVenda = custo * 0.5;

    let mlClassico = calcularMercadoLivreClassico(custo, frete);
    let mlPremium = calcularMercadoLivrePremium(custo, frete);
    let b2w = calcularB2W(custo, frete);
    let ianni = calcularIanni(custo);
    let magalu = calcularMagalu(custo);
    let olist = calcularOlist(custo, frete);
    let shopee = calcularShopee(custo);

    adicionarLinhaTabela(sku, custo, frete, [mlClassico, mlPremium, b2w, magalu, olist, shopee, ianni]);

    document.getElementById("custo").value = "";
    document.getElementById("frete").value = "";
    document.getElementById("sku").value = "";

}

/*
function adicionarLinhaTabela(sku, custo, frete, valores) {
    let tabela = document.getElementById("resultadoTabela");
    let newRow = tabela.insertRow();

    // Inserir o SKU e o Custo nas primeiras células da linha
    let skuCell = newRow.insertCell();
    skuCell.textContent = sku;

    let custoCell = newRow.insertCell();
    custoCell.textContent = custo.toFixed(2).replace(".", ",");

    let freteCell = newRow.insertCell();
    freteCell.textContent = frete.toFixed(2).replace(".", ",");

    // Inserir os valores nas células restantes
    for (let i = 0; i < valores.length; i++) {
        let newCell = newRow.insertCell();
        // Verificar se o valor é um número antes de chamar toFixed e substituir o ponto por vírgula
        let value = isNaN(valores[i]) ? valores[i] : valores[i].toFixed(2).replace(".", ",");
        newCell.textContent = value;
    }
}
*/

function adicionarLinhaTabela(sku, custo, frete, valores) {
    let tabela = document.getElementById("resultadoTabela");
    let newRow = tabela.insertRow();

    // Inserir o SKU e o Custo nas primeiras células da linha
    let skuCell = newRow.insertCell();
    skuCell.textContent = sku;

    let custoCell = newRow.insertCell();
    custoCell.textContent = custo.toFixed(2).replace(".", ",");

    let freteCell = newRow.insertCell();
    freteCell.textContent = frete.toFixed(2).replace(".", ",");

    // Inserir os valores nas células restantes
    for (let i = 0; i < valores.length; i++) {
        let cell = newRow.insertCell();
        cell.textContent = valores[i].toFixed(2).replace(".", ",");

        // Criar o botão de cópia para a célula atual
        let copyButton = document.createElement("button");
        copyButton.setAttribute("data-clipboard-text", cell.textContent);
        copyButton.setAttribute("class", "fa-regular fa-copy border-0 bg-transparent px-2");
        cell.appendChild(copyButton);

        new ClipboardJS(copyButton);
    }
}


function calcularMercadoLivreClassico(custo, frete, precoVenda, precoVendaFinal, porcentagemFinal, porcentagemFinalMl) {
    let taxa = 0.115;
    let imposto = 0.10;

    porcentagemFinal = 0;
    precoVendaFinal = 0;
    precoVenda = custo * 0.5;

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
}

function calcularMercadoLivrePremium(custo, frete, precoVenda, precoVendaFinal, porcentagemFinal) {
    let taxa = 0.165;
    let imposto = 0.10;

    porcentagemFinal = 0;
    precoVendaFinal = 0;
    precoVenda = custo * 0.5;

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
}


function calcularShopee(custo, precoVenda, precoVendaFinal, porcentagemFinal) {
    let taxa = 0.20;
    let imposto = 0.10;
    let tarifaFixa = 5;

    porcentagemFinal = 0;
    precoVendaFinal = 0;
    precoVenda = custo * 0.5;

    while (porcentagemFinal <= 1.52) {
        precoVenda += 1;

        let calculoTaxa = precoVenda * taxa;
        let calculoImposto = precoVenda * imposto;
        let bruto = precoVenda - calculoTaxa - calculoImposto - tarifaFixa;
        porcentagemFinal = bruto / custo;
        precoVendaFinal = precoVenda;
    }

    return precoVendaFinal;
}

function calcularOlist(custo, frete, precoVenda, precoVendaFinal, porcentagemFinal) {
    let taxa = 0.115;
    let imposto = 0.10;

    porcentagemFinal = 0;
    precoVendaFinal = 0;
    precoVenda = custo * 0.5;

    while (porcentagemFinal <= 1.45) {
        precoVenda += 1;

        let calculoTaxa = precoVenda * taxa;
        let calculoImposto = precoVenda * imposto;
        let taxasFrete = calculoTaxa + calculoImposto + frete;
        let bruto = precoVenda - taxasFrete;
        porcentagemFinal = bruto / custo;
        precoVendaFinal = precoVenda * 1.14;
    }

    return precoVendaFinal;
}

function calcularB2W(custo, frete, precoVenda, precoVendaFinal, porcentagemFinal) {
    let taxa = 0.165;
    let imposto = 0.10;

    porcentagemFinal = 0;
    precoVendaFinal = 0;
    precoVenda = custo * 0.5;

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
}

function calcularMagalu(custo, precoVenda, precoVendaFinal, porcentagemFinal) {

    let taxa = 0.16;
    let imposto = 0.10;
    let tarifaFixa = 5;

    porcentagemFinal = 0;
    precoVendaFinal = 0;
    precoVenda = custo * 0.5;

    while (porcentagemFinal <= 1.5200) {
        precoVenda += 1;

        let calculoTaxa = precoVenda * taxa;
        let calculoImposto = precoVenda * imposto;
        let bruto = precoVenda - calculoTaxa - calculoImposto - tarifaFixa;
        porcentagemFinal = bruto / custo;
        precoVendaFinal = precoVenda;

    }
    console.log("Preço final MagaLu = " + precoVendaFinal);
    console.log("Margem: " + porcentagemFinal);

    return precoVendaFinal;
    //document.getElementById("margemFinalMagalu").textContent = porcentagemFinal.toFixed(2) + "%"; 
}

function calcularIanni(custo, precoVenda, precoVendaFinal, porcentagemFinal) {
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
    precoVendaFinal = custo * 2.154;
    return precoVendaFinal;
    //document.getElementById("margemFinalIanni").textContent = porcentagemFinal.toFixed(2) + "%"; 
}
