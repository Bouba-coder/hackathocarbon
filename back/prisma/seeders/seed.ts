import { PrismaClient } from '@prisma/client';
import usersSeeder from './users.seeder';

const prisma = new PrismaClient();

async function main() {
    await usersSeeder();
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
