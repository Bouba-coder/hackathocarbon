import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function formationsSeeder() {

    const data = [
        { 
            nom: 'Formation en informatique',
            niveau: 'Expert',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl ultricies ul trices.',
            duree: '200',
        },
        {
            nom: 'Formation en comptabilité',
            niveau: 'Expert',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl ultricies ul trices.',
            duree: '200',
        },
        {
            nom: 'Formation de développeur web',
            niveau: 'Junior',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl ultricies ul trices.',
            duree: '200',
        },
        {
            nom: 'Formation en Green IT',
            niveau: 'Expert',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl ultricies ul trices.',
            duree: '60',
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