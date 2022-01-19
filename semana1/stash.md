# Uso del stash

## Modificar archivo
git checkout -b fix/autor-readme
echo "hecho por lu" >> README

## Guardar los cambios en el stash
git stash 

## Visualizar el stash
git stash list

## Cambiar rama
git checkout master

## Aplicar el stash
git checkout fix/autor-readme
git stash apply stash@{1}

## Borrar el stash
git stash drop