import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function consultantSeeder() {


    // await Promise.all(
    //     data.map(async (consultant) => {
    //         await prisma.consultant.upsert({
    //             where: { email: consultant.email },
    //             update: {},
    //             create: consultant,
    //         });
    //     }
    // ));

    await prisma.consultant.upsert({
        where: { email: "createConsultantDto.email" },
        update: {},
        create:     {
            email: "createConsultantDto@gmail.fr",
            metier: "createConsultantDto.metier",
            secteur: "createConsultantDto.secteur",
            disponibilite: "SIX_MOIS",
            perimetre: "createConsultantDto.perimetre",
            competences: ['java', "vs"],
            experiences: ['java', "vs"],
            formations: ['java', "vs"],
            actuel_entrepriseId : 1,
            level: 1,
            salaire: 33435,
            userId: 1
        }
    })
}