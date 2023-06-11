# Hackathon IW 2023
hackathon


## Environment Setup

```bash
DATABASE_URL="postgresql://user:password@db:5432/db?schema=public"
JWT_SECRET="secret"
```   

## Run Project

```bash
docker-compose up -d
docker-compose exec backend bash -c "npx prisma migrate dev"
docker-compose exec backend bash -c "npx prisma db seed"
```

## remove
```bash
docker compose down --remove-orphans --volumes
```