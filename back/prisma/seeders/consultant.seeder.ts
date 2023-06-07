import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function consultantSeeder() {

    // const data = [
        // {
        //   email: "Boubacariii@gmail.fr",
        //   role: "CONSULTANT",
        //   metier: "testeeurrrr",
        //   secteur: "banquerr",
        //   disponibilite: "SIX_MOIS",
        //   perimetre: "3 km",
        //   competences: [
        //     "java",
        //     "test"
        //   ],
        //   level: 2,
        //   salaire: 3000,
        //   userId: 2,
        //   experiences: [
        //     {
        //       nom_entreprise: "nom de l'entreprise clients",
        //       poste: "toto entreprise"
        //     }
        //   ],
        //   formations: [
        //     {
        //       nom: "toto formation",
        //       diplome: "formations_diplome",
        //       niveau: "formations_niveau"
        //     }
        //   ],
        //   clients: [
        //     {
        //       contact: "mon contacte dd",
        //       nom: "entreprise client",
        //       secteur: "secteur client"
        //     }
        //   ]
        // },
        // {
        //     email: "Boubaca@gmail.fr",
        //     role: "CONSULTANT",
        //     metier: "testeeurrrr",
        //     secteur: "banquerr",
        //     disponibilite: "SIX_MOIS",
        //     perimetre: "3 km",
        //     competences: [
        //       "java",
        //       "test"
        //     ],
        //     level: 2,
        //     salaire: 3000,
        //     userId: 2,
        //     experiences: [
        //       {
        //         nom_entreprise: "nom de l'entreprise clients",
        //         poste: "toto entreprise"
        //       }
        //     ],
        //     formations: [
        //       {
        //         nom: "toto formation",
        //         diplome: "formations_diplome",
        //         niveau: "formations_niveau"
        //       }
        //     ],
        //     clients: [
        //       {
        //         contact: "mon contacte dd",
        //         nom: "entreprise client",
        //         secteur: "secteur client"
        //       }
        //     ]
        //   }
 //         ]


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
            experiences: {
              create: [{
              nom_entreprise: "nom de l'entreprise",
              poste: "developpeur"
            }]},
            formations: {
              create: [
                {
              nom: "formation de luxe",
              diplome: "licence 3",
              niveau: "experte"
            }]
          },
            clients: {
              create: [{
              contact: "6577722662",
              nom: "namemmeme",
              secteur: "secteur"
            }]},
            level: 1,
            salaire: 33435,
            userId: 1
        }

    })
}