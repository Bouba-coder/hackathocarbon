/*
  Warnings:

  - You are about to drop the column `email` on the `Consultant` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `Consultant` table. All the data in the column will be lost.
  - You are about to drop the column `diplome` on the `Formation` table. All the data in the column will be lost.
  - You are about to drop the `Client` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Experience` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ClientToConsultant` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ConsultantToExperience` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ConsultantToFormation` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `entrepriseId` to the `Consultant` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `disponibilite` on the `Consultant` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `description` to the `Formation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Formation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ClientToConsultant" DROP CONSTRAINT "_ClientToConsultant_A_fkey";

-- DropForeignKey
ALTER TABLE "_ClientToConsultant" DROP CONSTRAINT "_ClientToConsultant_B_fkey";

-- DropForeignKey
ALTER TABLE "_ConsultantToExperience" DROP CONSTRAINT "_ConsultantToExperience_A_fkey";

-- DropForeignKey
ALTER TABLE "_ConsultantToExperience" DROP CONSTRAINT "_ConsultantToExperience_B_fkey";

-- DropForeignKey
ALTER TABLE "_ConsultantToFormation" DROP CONSTRAINT "_ConsultantToFormation_A_fkey";

-- DropForeignKey
ALTER TABLE "_ConsultantToFormation" DROP CONSTRAINT "_ConsultantToFormation_B_fkey";

-- DropIndex
DROP INDEX "Consultant_email_key";

-- AlterTable
ALTER TABLE "Consultant" DROP COLUMN "email",
DROP COLUMN "role",
ADD COLUMN     "entrepriseId" INTEGER NOT NULL,
ADD COLUMN     "experiences" TEXT[],
ADD COLUMN     "parcours" TEXT[],
DROP COLUMN "disponibilite",
ADD COLUMN     "disponibilite" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Formation" DROP COLUMN "diplome",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Client";

-- DropTable
DROP TABLE "Experience";

-- DropTable
DROP TABLE "_ClientToConsultant";

-- DropTable
DROP TABLE "_ConsultantToExperience";

-- DropTable
DROP TABLE "_ConsultantToFormation";

-- DropEnum
DROP TYPE "Disponibilite";

-- CreateTable
CREATE TABLE "Entreprise" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "contact" TEXT NOT NULL,

    CONSTRAINT "Entreprise_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Entreprise_nom_key" ON "Entreprise"("nom");

-- AddForeignKey
ALTER TABLE "Formation" ADD CONSTRAINT "Formation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consultant" ADD CONSTRAINT "Consultant_entrepriseId_fkey" FOREIGN KEY ("entrepriseId") REFERENCES "Entreprise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
