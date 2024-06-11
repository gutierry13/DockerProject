#  Passos para utilização

## Puxar o container do DockerHub:
docker pull gutierry13/node-mysql-app  

## Para executar o banco de dados, rode os comandos abaixo:
docker run -d --name mysql --network my-network -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=db_aula mysql:latest  

## Aguarde a criação e execute o comando para poder executar querys:
docker exec -it mysql mysql -u root -proot db_aula  

## Execute os comandos abaixo para criar e popular a tabela:  
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);

INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com'), ('Bob', 'bob@example.com');  

## Execute para verificar a tabela:  
SELECT * FROM users;

## Para executar a aplicação, rode o comando abaixo:
docker run -d --name node-mysql-app --network my-network -p 3000:3000 gutierry13/node-mysql-app
