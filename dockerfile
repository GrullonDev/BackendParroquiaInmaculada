# Etapa de construcción
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa de producción
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY --from=builder /app/dist ./dist
# COPY --from=builder /app/.env.production .env

# 👇 Si usas GraphQL config, asegúrate de copiarlo también
# COPY --from=builder /app/graphql.config.js ./graphql.config.js

EXPOSE 3000

HEALTHCHECK --interval=10s --timeout=3s --start-period=10s \
    CMD wget --no-verbose --tries=1 --spider http://localhost:3000/graphql || exit 1

CMD ["node", "dist/main"]