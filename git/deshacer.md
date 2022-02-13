# Deshacer 

## Crear archivo LICENCE

echo "MIT LICENCE" > LICENCE

git add .

git commit -m ""

## Descartar ultimos cambios 

echo "Esta licencia..." >> LICENCE

git restore LICENCE

## Agregar un archivo a un commit anterior (solo local)

git commit --amend

## Modificar archivo LICENCE
echo "foo" >> LICENCE

## Descartar cambios en LICENCE
git checkout -- LICENCE o git restore LICENCE
