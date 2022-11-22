import { Posts, Usuarios } from "./types";

export const mockUsuarios:Usuarios[] =[
    {
        id: 1,
        name: 'Pompom',
        phone: 9988,
        email: 'pompom@gmail.com',
        website: 'www.pompom.com.br',
    },  
    {
        id: 2,
        name: 'Mewtwo',
        phone: 1321,
        email: 'mewzinho@gmail.com',
        website: 'www.mewtwopokemon.com.br'
    },
    {
        id: 3,
        name: 'Lula 13',
        phone: 1313131313,
        email: 'lula@gmail.com',
        website: 'www.lula.com.br'
    },
    {
        id: 4,
        name: 'Labenu',
        phone: 12141516,
        email: 'labenu@gmail.com',
        website: 'www.labenu.com.br'
    },
    {
        id: 5,
        name: 'Jesca',
        phone: 4416323,
        email: 'jesca@gmail.com',
        website: 'www.jesca.com.br'
    }
]

// Pra mim é mais fácil compreender os arrays separados
export const mockPosts:Posts[]=[
    {
        id: 1,
        title: "Harry Potter e a Câmara Secreta",
        body: "aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaa",
        userId: 5
    },
    {
        id: 2,
        title: "Harry Potter e o Enigma do Principe",
        body: "muito bom",
        userId: 4
    },
    {
        id: 3,
        title: "Vingadores",
        body: "bom demais",
        userId: 5
    },
    {
        id: 4,
        title: "Café preto é bom",
        body: "nao vivo sem café",
        userId: 4
    },
    {
        id: 5,
        title: "Mocaccino",
        body: "eu amo mocaccino aaaaaaaaa",
        userId: 3
    },
    {
        id: 6,
        title: "Qual é a melhor série da Netflix",
        body: "Stranger things OBVIO",
        userId: 2
    },
    {
        id: 7,
        title: "Pompom",
        body: "Minha felina se chama pompom",
        userId: 3
    },
    {
        id: 8,
        title: "Quando vou ficar ryca?",
        body: "Só deus sabe",
        userId: 2
    },
    {
        id: 9,
        title: "Harry",
        body: "Ever since new york é a melhor musica ja feita",
        userId: 1
    },
    {
        id: 10,
        title: "era só um show do harry sabe",
        body: "Pq eu não nasci na Inglaterra?",
        userId: 1
    },
]
