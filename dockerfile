# Etapa de construcción
FROM node:20-alpine AS builder

WORKDIR /app

# Instala dependencias y CLI
COPY package*.json ./
RUN npm install

# Copia código fuente
COPY . .

# Compila la aplicación NestJS
RUN npx nest build

# Etapa final
FROM node:20-alpine

WORKDIR /app

# Copia solo lo necesario para producción
COPY package*.json ./
RUN npm install --omit=dev

# Copia archivos compilados
COPY --from=builder /app/dist ./dist

EXPOSE 3000

# Comando para iniciar el backend
CMD ["node", "dist/main"]