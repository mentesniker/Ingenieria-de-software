# Instalacion docker

## Instalar
sudo apt install docker.io

## Agregar usuario al grupo docker
sudo gpasswd -a ${USER} docker

## Iniciar servicio de docker
sudo systemctl enable --now docker
