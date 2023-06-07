import { PrismaClient } from '@prisma/client';
import usersSeeder from './users.seeder';
import consultantSeeder from './consultant.seeder';

const prisma = new PrismaClient();

async function main() {
    await usersSeeder();
    await consultantSeeder();
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
