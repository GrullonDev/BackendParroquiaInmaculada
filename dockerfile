# Ajuste del archivo Dockerfile para manejar correctamente la carpeta dist
# cuando se encuentra dentro de la carpeta "functions"

# Etapa de construcción
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa final para producción
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

# 🔧 Ajuste aquí si "dist" está dentro de "functions"
COPY --from=builder /app/functions/dist ./dist

EXPOSE 3000

CMD ["node", "dist/main"]