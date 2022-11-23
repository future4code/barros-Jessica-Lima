## Exercício 1
* A) ALTER TABLE Actor DROP COLUMN salary; R: Deleta a coluna de `salary`
* B) ALTER TABLE Actor CHANGE gender sex VARCHAR(6); R: Altera o nome da coluna
* C) ALTER TABLE Actor CHANGE gender gender VARCHAR(255); R: Vai dar erro, pois a coluna foi alterada para `sex`
* D) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

## Exercício 2
* A) UPDATE Actor SET name = "Moacyr Franco", birth_date = "1999-02-04" WHERE id = "003";
* B) UPDATE Actor SET name = "JULIANA PAES" WHERE name = "Juliana Paes"; 
     UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PAES";
* C) UPDATE Actor SET name = "Amybeth McNulty", salary = 30000, birth_date = "2001-11-7", gender = "female" WHERE id = "005";
* D) Não deu erro, mas não alterou a tabela

## Exercício 3
* A) DELETE FROM Actor WHERE name = "Fulano de tal"; OBS: Não tinha Fernanda Montenegro na minha tabela
* B) DELETE FROM Actor WHERE gender = "male" AND salary > 100000000;

## Exercício 4
* A) SELECT MAX(salary) FROM Actor;
* B) SELECT MIN(salary) FROM Actor WHERE gender = "female";
* C) SELECT COUNT(*) FROM Actor WHERE gender = "female";
* D) SELECT SUM(salary) FROM Actor;

## Exercício 5
* A) O comando agrupa as linhas que possuem informaçõs repetidas, no caso `female` e `male`
* B) SELECT id, name FROM Actor ORDER BY name DESC;
* C) SELECT * FROM Actor ORDER BY salary ASC;
* D) SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
* E) SELECT AVG(salary), salary FROM Actor WHERE gender = "female" GROUP BY salary; OBS: Não tenho certeza disso

## Exercício 6
* A) ALTER TABLE Movie ADD movie_date DATE;
* B) ALTER TABLE Movie CHANGE avaliacao avaliacao FLOAT;
* C) UPDATE Movie SET movie_date = "2022-10-21" WHERE id = "001";
* D) ALTER TABLE Movie CHANGE avaliacao avaliacao DATE; (Nâo entendi essa)
