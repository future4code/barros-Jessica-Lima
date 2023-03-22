

function oneEdit (string1: string, string2: string):boolean {
    if (Math.abs(string1.length - string2.length) > 1){
        return false
    }

    if (string1.length > string2.length) return string1.includes(string2)
    if (string2.length > string1.length) return string2.includes(string1)

    let x = 0
    for(let i =0; i <string1.length; i++){
        if(string1[i] !== string2[i]) x++
    }

    return x === 1
    
}   