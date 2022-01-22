# Ejecutar cliente y servidor al mismo tiempo

## Instalar docker compose

sudo apt  install docker-compose


## Crear un archivo docker composer

nano docker-compose.yml


copiar el siguiente contenido

    version: "3.7"
    services:

        mi-servidor:
            image: mariadb:latest
            ports:
                - 3306:3306
            volumes:
                - base-compose:/var/lib/mysql
            environment:
                MARIADB_USER: juan
                MARIADB_PASSWORD: foo
                MARIADB_ROOT_PASSWORD: foo
        mi-cliente:
            image: mariadb:latest
            command: "tail -F anything"

    volumes:
        base-compose:

## Ejecutar el archivo docker compose

docker-compose up -d

## Acceder al contenedor del cliente

docker exec -it desktop_mi-cliente_1 bash

mysql -h mi-servidor -u root -p

## Detener ambos contenedores al mismo tiempo

docker-compose down
