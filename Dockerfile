# Imagen base oficial de Node
FROM node:18-alpine

# Crear directorio de trabajo
WORKDIR /api-proyecto-cloud

# Copiar dependencias primero
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto de la app
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "index.js"]