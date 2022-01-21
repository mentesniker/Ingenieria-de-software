# Deshacer 

## Crear archivo LICENCE

echo "MIT LICENCE" > LICENCE
git add .

## Agregar un archivo a un commit anterior (solo local)

git commit --amend

## Modificar archivo LICENCE
echo "foo" >> LICENCE

## Descartar cambios en LICENCE
git checkout -- LICENCE o git restore LICENCE