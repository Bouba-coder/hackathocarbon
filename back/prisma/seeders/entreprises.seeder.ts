import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function entreprisesSeeder() {

    const data = [
        { 
            contact: '06 12 34 56 78',
            nom: 'Apple',
        },
        {
            contact: '01 23 45 67 89',
            nom: 'Carefour',
        },
        {
            contact: '01 99 88 77 66',
            nom: 'Dell',
        },
        {
            contact: '01 23 45 67 89',
            nom: 'LVMH',
        },
        {
            contact: '01 23 45 67 89',
            nom: 'Microsoft',
        },
        {
            contact: '01 23 45 67 89',
            nom: 'Samsung',
        },
    ];

    await Promise.all(
        data.map(async (entreprise) => {
            await prisma.entreprise.upsert({
                where: { nom: entreprise.nom },
                update: {},
                create: entreprise,
            });
        }
    ));
}