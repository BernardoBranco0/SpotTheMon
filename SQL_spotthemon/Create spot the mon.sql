drop table Imagens;
drop table Membros;
drop table Grupo;
drop table Cliente;
Drop table Monumento;



CREATE TABLE Monumento
(
  Nome varchar(60) NOT NULL,
  M_lat FLOAT(10, 6) not null,
  M_long FLOAT(10, 6) not null,
  image varchar(2100) not null,
  M_desc varchar(2100),
  ano_construcao int,
  freguesia varchar(250),
  PRIMARY KEY (Id_monumento),
  id_monumento INT NOT NULL auto_increment
);

CREATE TABLE Cliente
(
  C_Name VARCHAR(50) NOT NULL,
  C_Nacionalidade VARCHAR(50) NOT NULL,
  C_Email VARCHAR(250) NOT NULL,
  C_id INT NOT NULL,
  PRIMARY KEY (C_id)
);





CREATE TABLE Grupo
(
  G_id INT NOT NULL,
  G_name VARCHAR(200) NOT NULL,
  Id_monumento INT NOT NULL,
  owner_id INT NOT NULL,
  G_descricao varchar(3000),
  PRIMARY KEY (G_id),
  FOREIGN KEY (owner_id) REFERENCES Cliente(C_id),
  FOREIGN KEY (Id_monumento) REFERENCES Monumento(Id_monumento),
  UNIQUE (Id_monumento),
  UNIQUE (owner_id)
);

CREATE TABLE Membros
(
  M_id INT NOT NULL auto_increment,
  C_id INT NOT NULL,
  G_id INT NOT NULL,
  PRIMARY KEY (M_id),
  FOREIGN KEY (C_id) REFERENCES Cliente(C_id),
  FOREIGN KEY (G_id) REFERENCES Grupo(G_id)

);



CREATE TABLE Imagens
(
  Img_id INT NOT NULL,
  URL VARCHAR(15000) NOT NULL,
  I_descricao varchar(2500),
  G_id INT NOT NULL,
  M_id INT NOT NULL,
  PRIMARY KEY (Img_id),
  FOREIGN KEY (G_id) REFERENCES Grupo(G_id),
  FOREIGN KEY (M_id) REFERENCES Membros(M_id)

);



