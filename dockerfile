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
RUN npm install --development

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/main"]