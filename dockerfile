# Etapa de construcción
FROM node:20-alpine AS builder

WORKDIR /app

# Instala todas las dependencias (incluyendo @nestjs/cli)
COPY package*.json ./
RUN npm install

# Copia el código y compila
COPY . .
RUN npm run build

# Etapa final para producción
FROM node:20-alpine

WORKDIR /app

# Solo dependencias necesarias para producción
COPY package*.json ./
RUN npm install --omit=dev

# Copia los archivos ya compilados
COPY --from=builder /app/dist ./dist

EXPOSE 3000

# Comando de arranque
CMD ["node", "dist/main"]