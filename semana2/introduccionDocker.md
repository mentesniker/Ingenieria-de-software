# Crear un contenedor

## Clonar un repositorio
git clone https://github.com/mentesniker/simple-vue.git

## Crear archivo docker file
cd simple-vue
cd dogs
nano Dockerfile 
copiar contenido -> 
'
	FROM node:lts-alpine

	#make the 'dogs' folder the current working directory
	WORKDIR /dogs

	#install axios
	RUN npm install axios

	#copy both 'package.json' and 'package-lock.json' (if available)
	COPY package*.json ./

	#install project dependencies
	RUN npm install

	#copy project files and folders to the current working directory (i.e. 'dogs' folder)
	COPY . .

	CMD [ "npm", "run", "serve" ]
'

## Crear imagen
docker build -t laboratorio2 .

## Crear contenedor
docker run -d -p 8080:8080 laboratorio2

## Cambiar el codigo
cd src/components
nano tabla.vue

## Crear imagen y contenedor de nuevo
docker build -t laboratorio2 .
docker run -dp 8080:8080 laboratorio2

## Listar contenedores
docker ps

## Detener contenedor
docker stop <ID del contenedor>

## Borrar contenedor
docker rm <ID del contenedor>

# Correr el contenedor
docker run -dp 3000:3000 laboratorio2
