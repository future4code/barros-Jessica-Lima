## Exercício 1
* A) `VARCHAR`: conjunto de caracteres `DATE`: Representa data
* B) `SHOW DATABASES`: mosta o banco de dados `SHOW TABLES` mostra as tabelas existentes no BD
* C) `DESCRIBE Actor`: mostra as especificações de cada elemento da tabela. Ex: tipo (varchar/date...)

## Exercício 2
* A) 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "male"
);
* B) O comando não pode ser executado pois a entrada está duplicada
* C) Faltou identificar as colunas da tabela corretamente
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
* D) Faltou informar o nome, que não pode ser nulo
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Fulano de tal",
  400000,
  "1949-04-18", 
  "male"
);
* E) Data informada incorretamente, precisa usar " data "
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
* F) 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Millie Bobby Brown",
  919333.33,
  "2004-02-19", 
  "female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Sadie Sink",
  919333.33,
  "2002-04-16", 
  "female"
);

## Exercício 3
* A) SELECT id, name, salary, birth_date, gender FROM Actor WHERE gender = "female";
* B) SELECT name, salary FROM Actor WHERE name = "Tony Ramos";
* C) SELECT id, name, salary, birth_date, gender FROM Actor WHERE gender = "invalid"; (não retornou nada pois não tem gender "invalid")
* D) SELECT id, name, salary FROM Actor WHERE salary <= 50000;
* E) A propriedade "nome" está incorreta. O correto é "name" SELECT id, name from Actor WHERE id = "002";

## Exercício 4
* A) A condição pro retorno entre () significa que vai ser olhada primeiro, depois o salário. Caso contrário retornariam todos os salários maiores de 300000 não considerando a condição das primeiras letras dos nomes
* B) SELECT id, name, salary, birth_date, gender FROM Actor WHERE (name NOT LIKE "A%") AND salary > 350000;
* C) SELECT * FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%";
* D) SELECT * FROM Actor WHERE 	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 900000;

## Exercício 5
* A) 
CREATE TABLE Filmes (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR (255) NOT NULL,
    sinopse TEXT,
    data_lanc DATE NOT NULL,
    avaliacao VARCHAR(255)
);
* B)
INSERT INTO Filmes (id, nome, sinopse, data_lanc, avaliacao)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  "7"
);
* C)
INSERT INTO Filmes (id, nome, sinopse, data_lanc, avaliacao)
VALUES(
  "002", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  "10"
);
* D)
INSERT INTO Filmes (id, nome, sinopse, data_lanc, avaliacao)
VALUES(
  "003", 
  "Doce de mãe",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  "8"
);
* E)
INSERT INTO Filmes (id, nome, sinopse, data_lanc, avaliacao)
VALUES(
  "004", 
  "Cidade de Deus",
  "Buscapé é um jovem pobre, negro e sensível, que cresce em um universo de muita violência. Ele vive na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos do Rio. Amedrontado com a possibilidade de se tornar um bandido, Buscapé é salvo de seu destino por causa de seu talento como fotógrafo, o qual permite que siga carreira na profissão.",
  "2002-08-30", 
  "10"
);

## Exercício 6
* A) SELECT id, nome, avaliacao FROM Filmes WHERE id = 004;
* B) SELECT * FROM Filmes WHERE nome = "Se Eu Fosse Você";
* C) SELECT id, nome, sinopse FROM Filmes WHERE avaliacao >= 7;

## Exercício 7
* A) SELECT * FROM Filmes WHERE nome LIKE "%vida%";
* B) SELECT * FROM Filmes WHERE nome LIKE "%Cidade%" OR sinopse LIKE "%animada%";
* C) SELECT * FROM Filmes WHERE data_lanc < "2022-11-08";
* D) SELECT * FROM Filmes WHERE data_lanc < "2022-11-08" AND (nome LIKE "%Cidade%" OR
      sinopse LIKE "%jovem%") AND avaliacao > 7;


