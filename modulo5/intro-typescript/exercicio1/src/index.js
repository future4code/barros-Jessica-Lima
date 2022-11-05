var ladoA = 10;
var ladoB = 10;
var ladoC = 10;
function checaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA !== ladoB && ladoB !== ladoC) {
        return "Escaleno";
    }
    else if (ladoA === ladoB && ladoB === ladoC) {
        return "Equil\u00E1tero";
    }
    else {
        return "Is\u00F3seles";
    }
}
console.log(checaTriangulo(ladoA, ladoB, ladoC));
