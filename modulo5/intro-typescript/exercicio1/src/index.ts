
let ladoA: number = 10
let ladoB: number = 10
let ladoC: number = 10

function checaTriangulo (ladoA: number, ladoB: number, ladoC:number) :string{
    
    if ( ladoA !== ladoB && ladoB !== ladoC){
        return `Escaleno`
    } else if ( ladoA === ladoB && ladoB === ladoC){
        return `Equilátero`
    }else{
        return `Isóseles`
    }
}
console.log(checaTriangulo(ladoA, ladoB, ladoC))
