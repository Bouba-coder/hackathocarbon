# hackathocarbon
hackathon


## Environment Setup

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/db?schema=public"
JWT_SECRET="secret"
```   

## Run Prisma Migrations and Seed

```bash
npx prisma migrate dev
npx prisma db seed
```