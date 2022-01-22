# Conexion entre contenedores

## Mostrar que dos contenedores no tienen conexion

docker run --detach --name some-mariadb2 --env MARIADB_ROOT_PASSWORD=foo -p 3306:3306 mariadb:latest


docker run -it mariadb mysql -hsome-mariadb2 -uroot -p

## Crear una red para los contenedores

docker network create mi-red

## Crear un contenedor de mariaDB cliente

docker build -t cliente-maria .


## Crear contenedor de maria DB y agregarlo a la red

docker run --detach --network mi-red --network-alias manejador --name some-mariadb2 --env MARIADB_ROOT_PASSWORD=foo -p 3306:3306 mariadb:latest


## Crear un contendor cliente de maria DB

docker run -it --network mi-red --rm mariadb mysql -hsome-mariadb2 -uroot -p