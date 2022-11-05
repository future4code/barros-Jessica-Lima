var n1 = 50;
var n2 = 20;
function comparar(n1, n2) {
    var maior;
    var menor;
    if (n1 > n2) {
        maior = n1;
        menor = n2;
    }
    else {
        maior = n2;
        menor = n1;
    }
    var diferenca = maior - menor;
    return diferenca;
}
console.log(comparar(n1, n2));
