# Administracion de archivos basica

## Crear repositorio
git init

## Clonar repositorio
git clone url nombreCarpeta

## Verificar el estado de los archivos(untracked, unmodified, modified, staged)
git status ( git status -s para version simplificada)

## Crear nuevo archivo untracked
echo 'Hello world' > README

## Tracking nuevos archivos
git add README

## Modificar archivo README
nano README

## Revisar diferencias
git diff

## Agregar nuevas modificaciones 
git add README

## Agregar git ignore
nano .gitignore ([0-9],*,? expresiones regulares validas)

## Hacer commit
git commit (git commit -v para mostrar los cambios hechos, que mensaje poner https://www.conventionalcommits.org/en/v1.0.0/)

## Agregar archivo para remover
echo "hola mundo" > hola.txt

## Remover del area de stage
git reset HEAD hola.txt o git restore --staged hola.txt