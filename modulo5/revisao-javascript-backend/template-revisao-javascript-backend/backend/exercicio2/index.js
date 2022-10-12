
const clientes = [
	{ id: 1, nome: 'Fulano' },
	{ id: 2, nome: 'Ciclano' },
	{ id: 3, nome: 'Beltrano' },
	{ id: 4, nome: 'Fulana' }
]

const novoCliente = (id, nome) =>{
    
    if( typeof id !== 'number' ){
        console.log('ID deve ser um número')
    }else{
    return clientes.push({ id, nome }) 
    }

    if( clientes.includes({ id: id })){
        console.log('ID ja existe')

    }else{
    return clientes.push({ id, nome }) 
    }
}

console.log( novoCliente( 2, "mewtwo"))
console.log(clientes)
