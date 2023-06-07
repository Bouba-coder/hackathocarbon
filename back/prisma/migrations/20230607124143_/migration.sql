-- CreateEnum
CREATE TYPE "Disponibilite" AS ENUM ('IMMEDIAT', 'TROIS_MOIS', 'SIX_MOIS');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CONSULTANT', 'ADMIN', 'RH');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'CONSULTANT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "contact" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "secteur" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Experience" (
    "id" SERIAL NOT NULL,
    "nom_entreprise" TEXT NOT NULL,
    "poste" TEXT NOT NULL,

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Formation" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "diplome" TEXT NOT NULL,
    "niveau" TEXT NOT NULL,

    CONSTRAINT "Formation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Consultant" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'CONSULTANT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "metier" TEXT NOT NULL,
    "secteur" TEXT NOT NULL,
    "disponibilite" "Disponibilite" NOT NULL,
    "perimetre" TEXT NOT NULL,
    "competences" TEXT[],
    "level" INTEGER NOT NULL,
    "salaire" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Consultant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ClientToConsultant" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ConsultantToExperience" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ConsultantToFormation" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Consultant_email_key" ON "Consultant"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_ClientToConsultant_AB_unique" ON "_ClientToConsultant"("A", "B");

-- CreateIndex
CREATE INDEX "_ClientToConsultant_B_index" ON "_ClientToConsultant"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ConsultantToExperience_AB_unique" ON "_ConsultantToExperience"("A", "B");

-- CreateIndex
CREATE INDEX "_ConsultantToExperience_B_index" ON "_ConsultantToExperience"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ConsultantToFormation_AB_unique" ON "_ConsultantToFormation"("A", "B");

-- CreateIndex
CREATE INDEX "_ConsultantToFormation_B_index" ON "_ConsultantToFormation"("B");

-- AddForeignKey
ALTER TABLE "Consultant" ADD CONSTRAINT "Consultant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClientToConsultant" ADD CONSTRAINT "_ClientToConsultant_A_fkey" FOREIGN KEY ("A") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClientToConsultant" ADD CONSTRAINT "_ClientToConsultant_B_fkey" FOREIGN KEY ("B") REFERENCES "Consultant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ConsultantToExperience" ADD CONSTRAINT "_ConsultantToExperience_A_fkey" FOREIGN KEY ("A") REFERENCES "Consultant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ConsultantToExperience" ADD CONSTRAINT "_ConsultantToExperience_B_fkey" FOREIGN KEY ("B") REFERENCES "Experience"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ConsultantToFormation" ADD CONSTRAINT "_ConsultantToFormation_A_fkey" FOREIGN KEY ("A") REFERENCES "Consultant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ConsultantToFormation" ADD CONSTRAINT "_ConsultantToFormation_B_fkey" FOREIGN KEY ("B") REFERENCES "Formation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
