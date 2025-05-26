# Etapa de construcción
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar e instalar dependencias (incluyendo nest cli)
COPY package*.json ./
RUN npm install

# Copiar el resto del código
COPY . .

# Compilar la app
RUN npm run build

# Etapa final para producción
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

# Copiar dist compilado desde el builder
COPY --from=builder /app/dist ./dist

EXPOSE 3000

HEALTHCHECK --interval=10s --timeout=3s --start-period=10s CMD wget --no-verbose --tries=1 --spider http://localhost:3000/graphql || exit 1

CMD ["node", "dist/main"]