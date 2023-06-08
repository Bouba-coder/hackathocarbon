import { Disponibilite, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function consultantSeeder() {


  const datas = [
    {
      email: "createConsultantDto@gmail1.fr",
      metier: "createConsultantDto.metier",
      secteur: "banque",
      disponibilite: "SIX_MOIS",
      perimetre: "3 km",
      competences: ['java', "angular", "nest"],
      experiences: ['Développeur web', "Développeur information", "Développeur mobile"],
      formations: ['Angular', "React native"],
      actuel_entrepriseId : 1,
      level: 1,
      salaire: 33435,
      userId: 1
    },
    {
      email: "createConsultantDto@gmail2.fr",
      metier: "createConsultantDto.metier",
      secteur: "banque",
      disponibilite: "SIX_MOIS",
      perimetre: "3 km",
      competences: ['java', "angular", "nest"],
      experiences: ['Développeur web', "Développeur information", "Développeur mobile"],
      formations: ['Angular', "React native"],
      actuel_entrepriseId : 1,
      level: 1,
      salaire: 3435,
      userId: 2
    } 
  ]


await Promise.all(
 datas.map(async (data) => {
  await prisma.consultant.upsert({
    where: { email: data.email },
    update: {},
    create: {
      email: data.email,
      metier: data.metier,
      secteur: data.secteur,
      disponibilite: Disponibilite.IMMEDIAT,
      perimetre: data.perimetre,
      competences: data.competences,
      experiences: data.experiences,
      formations: data.formations,
      actuel_entrepriseId : data.actuel_entrepriseId,
      level: data.level,
      salaire: data.salaire,
      userId: data.userId
    },
})
 })
)
  

}
