# Etapa de construcción
FROM node:20-alpine AS builder

WORKDIR /app

# Copia archivos de dependencias y las instala
COPY package*.json ./
RUN npm install

# Copia el resto del código
COPY . .

# Ejecuta compilación usando el Nest CLI desde node_modules
RUN ./node_modules/.bin/nest build

# Etapa final: solo lo esencial para producción
FROM node:20-alpine

WORKDIR /app

# Instala solo dependencias necesarias para producción
COPY package*.json ./
RUN npm install --omit=dev

# Copia el build final
COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/main"]