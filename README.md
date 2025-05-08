# 📦 Iglesia Backend - Proyecto NestJS

Este proyecto contiene el backend para el sistema de gestión de la Iglesia, desarrollado con NestJS, PostgreSQL y Docker siguiendo buenas prácticas y principios de arquitectura limpia.

## 🚀 Tecnologías

- NestJS
- PostgreSQL
- TypeORM
- Docker
- Docker Compose

## 🧪 Entornos

- `develop`: Desarrollo local
- `main`: Producción

## 🔧 Configuración

1. Clonar el repositorio
2. Copiar `.env.development` o `.env.production` según el entorno
3. Ejecutar Docker:

```bash
docker-compose up --build
```

## 🔌 GraphQL API

Este proyecto utiliza Apollo Server con NestJS para servir una API GraphQL.

- Playground: disponible en `http://localhost:3000/graphql`
- El esquema es generado automáticamente (`schema.gql` en la raíz de `src`)
