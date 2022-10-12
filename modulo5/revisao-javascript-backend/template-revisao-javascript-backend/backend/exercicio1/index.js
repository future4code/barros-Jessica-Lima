

const converteTemperatura = (celsius, converter) =>{
    
    const K = celsius + 273.15
    const F = 1.8 * celsius + 32

    if (typeof celsius ==! "number"){
        return("Celsius deve ser um número")
    }else{

        switch (converter) {
            case "F":
                return `${celsius}ºC equivale a ${F}º Fahrenheit`
            break;
            case "K":
            return `${celsius}ºC equivale a ${K}º Kelvin`
            break;
        default:
            return "Escala inválida (deve ser K ou F)"
        }
    }
    
}
console.log(converteTemperatura(30, "K"))

