import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function consultantsSeeder() {

    const data = [
        { 
            metier: 'Développeur',
            secteur: 'Informatique',
            disponibilite: 'Immédiate',
            perimetre: 'Régional',
            competences: ['Javascript', 'React', 'NodeJS'],
            level: 3,
            salaire: 30000,
            experiences: JSON.stringify([
                {
                    titre: 'Développeur',
                    entreprise: 'Apple',
                    description: 'Développement de l\'application Apple Music',
                    duree: 12,
                },
                {
                    titre: 'Développeur backend',
                    entreprise: 'Microsoft',
                    description: 'Développement de l\'application Microsoft Teams',
                    duree: 24,
                },
            ]),
            parcours: JSON.stringify([
                {
                    titre: 'Bac S',
                    etablissement: 'Lycée de la ville',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl ultricies ul trices.',
                    duree: 3,
                },
                {
                    titre: 'BTS SIO',
                    etablissement: 'Lycée de la ville',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl ultricies ul trices.',
                    duree: 2,
                },  
                {
                    titre: 'Licence informatique',
                    etablissement: 'Université de la ville',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl ultricies ul trices.',
                    duree: 1,
                }
            ]),
            entreprise: 'Apple',
            user: {
                id: 1,
            },
        },
        { 
            metier: 'Développeur',
            secteur: 'Informatique',
            disponibilite: 'Immédiate',
            perimetre: 'Régional',
            competences: ['Javascript', 'React', 'NodeJS'],
            level: 6,
            salaire: 50000,
            experiences: JSON.stringify([
                {
                    titre: 'Développeur',
                    entreprise: 'Apple',
                    description: 'Développement de l\'application Apple Music',
                    duree: 12,
                },
                {
                    titre: 'Développeur backend',
                    entreprise: 'Microsoft',
                    description: 'Développement de l\'application Microsoft Teams',
                    duree: 24,
                },
            ]),
            parcours: JSON.stringify([
                {
                    titre: 'Bac S',
                    etablissement: 'Lycée de la ville',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl ultricies ul trices.',
                    duree: 3,
                },
                {
                    titre: 'BTS SIO',
                    etablissement: 'Lycée de la ville',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl ultricies ul trices.',
                    duree: 2,
                },  
                {
                    titre: 'Licence informatique',
                    etablissement: 'Université de la ville',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl ultricies ul trices.',
                    duree: 1,
                }
            ]),
            entreprise: 'Dell',
            user: {
                id: 2,
            },
        },
    ];

    await Promise.all(
        data.map(async (consultant) => {
            await prisma.consultant.upsert({
                where: { userId: consultant.user.id },
                update: {},
                create: {
                    ...consultant,
                    entreprise: {
                        connect: { nom: consultant.entreprise },
                    },
                    user: {
                        connect: { id: consultant.user.id },
                    },
                }
            });
        }
    ));
}