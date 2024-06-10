docker pull gutierry13/node-mysql-app
docker run -d --name mysql --network my-network -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=db_aula mysql:latest
docker exec -it mysql mysql -u root -proot db_aula

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);

INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com'), ('Bob', 'bob@example.com');


SELECT * FROM users;

docker run -d --name node-mysql-app --network my-network -p 3000:3000 gutierry13/node-mysql-app
