var ano = 2016;
function anoBissexto(ano) {
    if (ano % 400 === 0) {
        return "bissexto";
    }
    else if (ano % 4 === 0 && ano % 100 !== 0) {
        return "bissexto";
    }
    else {
        return "n\u00E3o bissexto";
    }
}
console.log(anoBissexto(ano));
