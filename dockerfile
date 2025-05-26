# Etapa de construcción
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Este comando compila la app NestJS
RUN npm run build

# Etapa final para producción
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

# Copiamos el código compilado
COPY --from=builder /app/dist ./dist

EXPOSE 3000

HEALTHCHECK --interval=10s --timeout=3s --start-period=10s CMD wget --no-verbose --tries=1 --spider http://localhost:3000/graphql || exit 1

# Ejecutamos el archivo principal
CMD ["node", "dist/main"]