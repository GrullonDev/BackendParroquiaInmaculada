# Etapa de construcción
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar package.json y package-lock.json si existe
COPY package*.json ./

# Instalar TODAS las dependencias incluyendo @nestjs/cli
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Compilar la aplicación NestJS
RUN npm run build

# Etapa de producción
FROM node:20-alpine

WORKDIR /app

# Solo instalar dependencias necesarias para producción
COPY package*.json ./
RUN npm install --omit=dev

# Copiar el código compilado desde la etapa anterior
COPY --from=builder /app/dist ./dist

# Exponer puerto usado por NestJS
EXPOSE 3000

# Verificación de salud
HEALTHCHECK --interval=10s --timeout=3s --start-period=10s CMD wget --no-verbose --tries=1 --spider http://localhost:3000/graphql || exit 1

# Comando para iniciar la aplicación en producción
CMD ["node", "dist/main"]