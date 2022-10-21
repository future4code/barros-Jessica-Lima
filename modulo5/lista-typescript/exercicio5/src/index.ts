console.log("-- exercicio 5 --")

type Usuarios={
    name: string,
    email: string,
    role: string
}

const array: Usuarios[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 
function userAdmin(array: Usuarios[]){
    const user = array.filter((u)=>{
        return u.role === "admin"
    })
    return user
}
console.table(userAdmin(array))