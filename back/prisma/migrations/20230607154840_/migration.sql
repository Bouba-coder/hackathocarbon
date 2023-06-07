/*
  Warnings:

  - You are about to drop the `Experience` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ClientToConsultant` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ConsultantToExperience` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ConsultantToFormation` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `actuel_entrepriseId` to the `Consultant` table without a default value. This is not possible if the table is not empty.
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

-- AlterTable
ALTER TABLE "Consultant" ADD COLUMN     "actuel_entrepriseId" INTEGER NOT NULL,
ADD COLUMN     "experiences" TEXT[],
ADD COLUMN     "formations" TEXT[];

-- AlterTable
ALTER TABLE "Formation" ADD COLUMN     "userId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Experience";

-- DropTable
DROP TABLE "_ClientToConsultant";

-- DropTable
DROP TABLE "_ConsultantToExperience";

-- DropTable
DROP TABLE "_ConsultantToFormation";

-- AddForeignKey
ALTER TABLE "Formation" ADD CONSTRAINT "Formation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consultant" ADD CONSTRAINT "Consultant_actuel_entrepriseId_fkey" FOREIGN KEY ("actuel_entrepriseId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
