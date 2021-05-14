# evaluation

Clonar el repositorio y correr el comando:

`docker build -t challenge .`

para construir el contenedor.

Para levantar el mismo usar:

`docker-compose up -d`

La API corre en 

`http://localhost:3000/`

Para probar por POSTMAN:

(GET) `url: http://localhost:3000/iecho?text=some_text`

Para probar con CURL:

`curl --location --request GET 'http://localhost:3000/iecho?text=atinobonita'`
