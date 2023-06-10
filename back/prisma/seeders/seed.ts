import { PrismaClient } from '@prisma/client';
import usersSeeder from './users.seeder';
import entreprisesSeeder from './entreprises.seeder';
import formationsSeeder from './formations.seeder';
import consultantsSeeder from './consultants.seeder';
import articleSeeder from './article.seeder';
import commentaireSeeder from './commentaire.seeder';

const prisma = new PrismaClient();

async function main() {
    await usersSeeder();
    await entreprisesSeeder();
    await formationsSeeder();
    await consultantsSeeder();
    await articleSeeder();
    await commentaireSeeder();
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
