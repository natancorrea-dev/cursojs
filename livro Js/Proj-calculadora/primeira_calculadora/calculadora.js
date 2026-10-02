// function abrirCalc(){
//             window.open('calculadora-completa.html', 'calculadora', 'toolbar=no, \ location=no, directiores=no, menubar=no, \ scrollbars=no, resizable=no, menubar=no, top=250, left=450, \ width= 200, height=300')
//         }

function String2Number(valor){
    valor = valor.replace(",",".")
    return (parseFloat(valor))
}

function digito(dig){
    if (res.value.length < 12) {
        if(res.value != "0")
            res.value = res.value + dig
        else
            res.value = dig
    } 
}

function total (){
    if (op.value === "+")
        res.value = parseFloat(v1.value) + parseFloat(res.value)
    else if (op.value === "-")
        res.value = parseFloat(v1.value) - parseFloat(res.value)
    else if (op.value === "x")
        res.value = parseFloat(v1.value) * parseFloat(res.value)
    else if (op.value === "/"){
        if (res.value !== 0)
            res.value = parseFloat(v1.value) / parseFloat(res.value)
        else
            res.value = "Erro!"
    }
}

function operacao (ope){
    v1.value = res.value
    op.value = ope 
    res.value = "0"
}

function separador() {
    if (res.value.indexOf(",") < 0)
        res.value = res.value + ","
}

function limpar() {
    res.value = "0"
}

function retornar() {
            //  window.opener.valor.value = res.value
             window.close()
}

//  function abrirCalc() {
//             window.open(
//                 'calculadora-completa.html',
//                 'calculadora',
//                 'toolbar=no,location=no,menubar=no,scrollbars=no,resizable=no,top=250,left=450,width=200,height=300'
//             );
//         }

//         function String2Number(valor) {
//             return parseFloat(valor.replace(",", "."));
//         }

//         function digito(dig) {
//             if (res.value.length < 12) {
//                 if (res.value !== "0")
//                     res.value = res.value + dig;
//                 else
//                     res.value = dig;
//             }
//         }

//         function operacao(ope) {
//             v1.value = res.value;
//             op.value = ope;
//             res.value = "0";
//         }

//         function total() {
//             const a = String2Number(v1.value);
//             const b = String2Number(res.value);
//             let r;

//             if (op.value === "+") r = a + b;
//             else if (op.value === "-") r = a - b;
//             else if (op.value === "x") r = a * b;
//             else if (op.value === "/") r = (b !== 0) ? a / b : "Erro!";
//             else return; // nenhuma operação escolhida

//             res.value = String(r).replace(".", ",");
//         }

//         function separador() {
//             if (res.value.indexOf(",") < 0)
//                 res.value = res.value + ",";
//         }

//         function limpar() {
//             res.value = "0";
//         }

//         function retornar() {
//             window.close();
//         }
