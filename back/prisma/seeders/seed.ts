import { PrismaClient } from '@prisma/client';
import usersSeeder from './users.seeder';
import entreprisesSeeder from './entreprises.seeder';
import formationsSeeder from './formations.seeder';
import consultantsSeeder from './consultants.seeder';

const prisma = new PrismaClient();

async function main() {
    await usersSeeder();
    await entreprisesSeeder();
    await formationsSeeder();
    await consultantsSeeder();
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
