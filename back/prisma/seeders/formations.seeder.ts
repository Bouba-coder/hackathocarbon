import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function formationsSeeder() {

    const data = [
        { 
            userId: 3,
            nom: 'Formation en informatique',
            niveau: 'Expert',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl ultricies ul trices.',
        },
        {
            userId: 3,
            nom: 'Formation en comptabilité',
            niveau: 'Expert',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl ultricies ul trices.',
        },
        {
            userId: 3,
            nom: 'Formation de développeur web',
            niveau: 'Junior',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl ultricies ul trices.',
        },
        {
            userId: 3,
            nom: 'Formation en Green IT',
            niveau: 'Expert',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl ultricies ul trices.',
        },
    ];

    await Promise.all(
        data.map(async (formation) => {
            await prisma.formation.upsert({
                where: { nom: formation.nom },
                update: {},
                create: formation,
            });
        }
    ));
}