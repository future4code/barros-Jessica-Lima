## Exercício 1
* A) A Chave estrangeira estabelece um relacionamento entre duas tabelas. Uma coluna corresponde à mesma coluna que é a chave primária de outra tabela
* B)  
INSERT INTO Rating VALUES(
	"1",
	"Um dos melhores filmes brasileiro já feito",
    "10",
    "004"
);
INSERT INTO Rating VALUES(
	"2",
	"Filme divertido",
    "7",
    "002"
);
* C) Não é permitido pois não existe a chave primária referente a outra tabela
* D) ALTER TABLE Movie DROP COLUMN avaliacao;
* E) Não é permitido deletar pois o filme está sendo referenciado a tabela de avaliações

## Exercício 2
* A) A tabela vai fazer referência as duas tabelas (Filmes e Atores), indicando quais atores foram elenco e quais filmes
* B) 
INSERT INTO MovieCast VALUES(
	"002",
    "001"
);
INSERT INTO MovieCast VALUES(
	"002",
    "003"
);
INSERT INTO MovieCast VALUES(
	"004",
    "005"
);
INSERT INTO MovieCast VALUES(
	"002",
    "007"
);
INSERT INTO MovieCast VALUES(
	"002",
    "006"
);
INSERT INTO MovieCast VALUES(
	"003",
    "003"
);
* C) Não permite pois os dados a serem referenciados não existem nas tabelas
* D) Não permite pois o ator está sendo referenciado em outra tabela (chave extrangeira)

## Exercício 3
* A) O select vai retornar uma tabela com os filmes e as avaliações dos filmes que possuem. O operador ON indica algo SOBRE a tabela
* B) Não consegui fazer funcionar essa