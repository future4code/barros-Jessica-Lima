let ano: number = 2016

function anoBissexto(ano: number):string{
    
    if(ano % 400 === 0){
        return `bissexto`
    }
    else if(ano % 4 === 0 && ano % 100 !== 0){
        return `bissexto`
    }else{
        return `não bissexto`
    }
}
console.log(anoBissexto(ano))