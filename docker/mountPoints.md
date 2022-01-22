# MountPoints

## Bajar imagen de ubuntu

docker pull ubuntu:latest

## Ejecutar contenedor de ubuntu

docker run -it -v rutaLocal:/foo/ 


cd foo/


echo 'echo "Hello world!!!"' > script.sh

## Hacer cambios en el archivo desde ubuntu

nano scrip.sh

## Ejecutar desde docker 

./script.sh