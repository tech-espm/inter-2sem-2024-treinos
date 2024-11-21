-- Esse script vale para o MySQL 8.x. Se seu MySQL for 5.x, precisa executar essa linha comentada:
-- CREATE DATABASE IF NOT EXISTS treinos;
CREATE DATABASE IF NOT EXISTS treinos DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_0900_ai_ci;

USE treinos;

CREATE TABLE tipo (
  id int NOT NULL,
  nome varchar(50) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY nome_UN (nome)
);

INSERT INTO tipo (id, nome) VALUES
(1, 'Calistenia'),
(2, 'Musculação'),
(3, 'Alongamento');

CREATE TABLE treino (
  id int NOT NULL AUTO_INCREMENT,
  nome varchar(50) NOT NULL,
  idtipo int NOT NULL,
  imagem int NOT NULL,
  descricao_breve varchar(150) NOT NULL,
  descricao_completa mediumtext NOT NULL,
  exclusao datetime NULL,
  PRIMARY KEY (id),
  UNIQUE KEY nome_UN (nome),
  KEY exclusao_IX (exclusao)
);
