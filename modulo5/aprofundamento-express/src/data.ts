import * as allTypes from './types'

export const arrayDados:allTypes.Array[]=[
   {   userId: 'user1', tarefas: [
            { id: '2001', title: 'Assistir Harry Potter e a Pedra Filosofal', completed: false },
            { id: '2002', title: 'Assistir Harry Potter e a Câmara Secreta', completed: true },
        ],
    },
    {   userId: 'user2',tarefas: [
            { id: '2004', title: 'Assistir Harry Potter e o Prisioneiro de Azkaban', completed: true },
            { id: '2005', title: 'Assistir Harry Potter e o Cálice de Fogo', completed: true },
        ],
    },
    {   userId: 'user3', tarefas: [
            { id: '2007', title: 'Assistir Harry Potter e a Ordem da Fênix', completed: false },
            { id: '2009', title: 'Harry Potter e o Enigma do Príncipe', completed: true },
        ],
    },
    {   userId: 'user4', tarefas: [
            { id: '2010', title: 'Harry Potter e as Relíquias da Morte: Parte 1', completed: false },
            { id: '2011', title: 'Harry Potter e as Relíquias da Morte: Parte 2', completed: true },
        ]
    }
]