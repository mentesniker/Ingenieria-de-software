# Ejemplo MariaDB

## Descargar imagen de mariadb

docker pull mariadb


docker run --detach --name some-mariadb --env MARIADB_ROOT_PASSWORD=foo  -p 3306:3306 mariadb:latest

## Instalar cliente de mariaDB
sudo apt install mariadb-client-core-10.3

## Encontrar direccion ip del contenedor y conectarse
ifconfig


mysql -h < Direccion ip > -u root -p 

## Crear una base de datos
CREATE DATABASE perritos;


exit

## Crear un segundo contenedor y buscar la base de datos perritos


docker run --detach --name some-mariadb --env MARIADB_ROOT_PASSWORD=foo -p 3306:3306 mariadb:latest


docker run --detach --name some-mariadb2 --env MARIADB_ROOT_PASSWORD=foo -p 3306:3306 mariadb:latest


docker ps


docker stop < Id del contenedor >


docker ps -a


docker rm mariadb2

## Volver a conectarse a un contenedor detenido

docker stop some-mariadb2


docker start some-mariadb

# Volumenes

## 


