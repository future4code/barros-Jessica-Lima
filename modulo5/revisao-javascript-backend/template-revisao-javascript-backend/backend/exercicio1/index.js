// exercicio 1

const celsius = 20
const converter = "f"

const converteTemperatura = (celsius, converter) =>{
    
    const k = celsius - 273
    const f = 1.8 * celsius + 32

    if (typeof celsius ==! "number"){
        return("Celsius deve ser um número")
    }else{

        switch (converter) {
            case "f":
                return `${celsius}ºC equivale a ${f}º Fahrenheit`
            break;
            case "k":
            return `${celsius}ºC equivale a ${k}º Kelvin`
            break;
        default:
            return "Escala inválida (deve ser K ou F)"
        }
    }
    
}
console.log(converteTemperatura)

