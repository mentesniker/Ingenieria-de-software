# Ramas

## Crear rama
git branch feature/texto

## Cambiar a la rama nueva
git checkout feature/texto

## Crear nuevo archivo
echo "nuevo archivo" > nuevo.txt


git add .


git commit -m "feature: se agrego un nuevo archivo txt"

## Cambiar a la rama vieja y crear un archivo
git checkout master


echo "nuevo archivo 2" > nuevo2.txt


git add .


git commit -m "feature: se agrego un nuevo archivo 2 txt"

## Visualizar cambios
git log --oneline --decorate --graph --all

## Mezclar ramas
git checkout master


git merge feature/texto

## Borrar una rama
git branch -d feature/texto

# Conflictos en ramas

## Crear conflicto
git branch conflicto


git checkout conflicto


echo "hecho por luis" >> nuevo2.txt


git add .


git commit -m "docs: se agrego el autor del archivo 2 txt"


git checkout master


echo "hecho por juan" >> nuevo2.txt


git commit -m "docs: se agrego el autor del archivo 2 txt"

## Mezclar ramas
git merge conflicto

## Visualizar archivos con conflicto
git status

## Visualizar el conflicto
cat nuevo2.txt

## Arreglar conflicto
nano nuevo2.txt


git add .


git commit -m "docs: se corrigio los nombres de los autores del archivo 2 txt"

# Ramas remotas

## Traer ramas remotas
git fetch (nombre de la rama opcional)

## Mandar cambios a rama remota
echo "nuevos cambios remotos" > prueba.txt


git add .


git commit -m "docs: se agrego el autor del archivo 2 txt"


git push origin master

## Mostrar en github como hacer un pull request