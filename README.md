# 📦 Iglesia Backend - Proyecto NestJS

Este proyecto contiene el backend para el sistema de gestión de la Iglesia, desarrollado con NestJS, PostgreSQL y Docker siguiendo buenas prácticas y principios de arquitectura limpia.

## 🚀 Tecnologías

- ✅ NestJS
- ✅ GraphQL (Apollo Server)
- ✅ PostgreSQL
- ✅ TypeORM
- ✅ JWT (autenticación por roles)
- ✅ Docker y Docker Compose

## 🧪 Entornos

- `develop`: Desarrollo local
- `main`: Producción

## 🔧 Configuración del proyecto

### 1. Clonar el repositorio

1. Clonar el repositorio

```bash
git clone https://github.com/GrullonDev/BackendParroquiaInmaculada.git
cd parroquia_inmaculada
```

2. Copiar `.env.development`

```bash
cp .env.development .env
```

3. Configurar variables de entorno

```bash
DB_HOST=
DB_PORT=
DB_USERNAME=
DB_PASSWORD=
DB_DATABASE=
```

3. Ejecutar Docker:

```bash
docker-compose up --build
```

## 🔌 GraphQL API

Este proyecto utiliza Apollo Server con NestJS para servir una API GraphQL.

- Playground: disponible en `http://localhost:3000/graphql`
- El esquema es generado automáticamente (`schema.gql` en la raíz de `src`)
- Puedes hacer introspección y probar queries y mutaciones desde el navegador.

## 🔐 Autenticación

- Se utiliza JWT para proteger las rutas privadas.
- Los roles disponibles son: `PARROCO`, `VICARIO`, `NOTARIO`, `VICE_CANCILLER`.
- Las mutaciones `createUser` y `login` están disponibles en el esquema GraphQL.

## 🧩 Esquema modular

src/
├── modules/
│ ├── auth/
│ ├── user/
│ ├── cliente/
│ ├── padrino/
│ ├── sacerdote/
│ ├── documento/
│ └── reporte/

## 🤝 Contribuir

1. Haz un fork del proyecto
2. Crea una nueva rama: git checkout -b feature/nombre
3. Haz tus cambios y asegúrate que compilen: docker-compose up --build
4. Crea tu Pull Request 🚀

## 🛡 Buenas prácticas

- Código desacoplado y modular
- Uso de roles y permisos desde resolvers
- Tipado fuerte con DTOs y enums
- Uso de @nestjs/config para variables de entorno
- Queries optimizadas para reportería con SQL puro

## Contacto

Para cualquier consulta o sugerencia, contacta a [prosystem155@gmail.com](mailto:prosystem155@gmail.com)

Jorge Luis Grullón Marroquín
🖥 Desarrollador backend & frontend
(Portafolio)[https://jorgegrullondev.com]
