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
RUN npm install

# ⛔️ ERROR AQUÍ: Estás buscando dist fuera de functions
# ✅ CORRECTO: Usa la ruta relativa a funciones
COPY --from=builder /app/functions/dist ./functions/dist

EXPOSE 3000

CMD ["node", "functions/dist/main"]