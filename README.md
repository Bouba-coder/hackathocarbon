
# CarbonHub

Hackathon IW 2023


## Tech Stack

**Client:** Vite, React, Material UI, TailwindCSS

**Server:** Nest (Typescript)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file in the root of the folder `/back`.

```bash
DATABASE_URL="postgresql://user:password@db:5432/db?schema=public"
JWT_SECRET="secret"
```   

## Installation

Clone the project

```bash
  git clone https://github.com/Bouba-coder/hackathocarbon.git
```

Go to the project directory

```bash
  cd hackathocarbon
```

## Run Locally

Execute these commands in your terminal

```bash
docker-compose up -d
docker-compose exec backend bash -c "npx prisma migrate dev"
docker-compose exec backend bash -c "npx prisma db seed"
```


## Uninstall / Stop

```bash
docker compose down --remove-orphans --volumes
```
## Authors

- Boubacar YATERA [@Bouba-coder](https://github.com/Bouba-coder)
- Karim DAHOUMANE [@karimdahoumane](https://github.com/karimdahoumane)
- Adam SELLIN [@AdamSellin](https://github.com/AdamSellin)
- Ismaïl TOURE [@IsmaProject](https://github.com/IsmaProject)