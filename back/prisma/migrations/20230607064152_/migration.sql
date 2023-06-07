/*
  Warnings:

  - You are about to drop the column `adresse` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `code_postal` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `pays` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `ville` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `date_arrive` on the `Consultant` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `date_debut` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `date_fin` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Formation` table. All the data in the column will be lost.
  - You are about to drop the column `date_debut` on the `Formation` table. All the data in the column will be lost.
  - You are about to drop the column `date_fin` on the `Formation` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Formation` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[contact]` on the table `Client` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `contact` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Client_email_key";

-- AlterTable
ALTER TABLE "Client" DROP COLUMN "adresse",
DROP COLUMN "code_postal",
DROP COLUMN "createdAt",
DROP COLUMN "email",
DROP COLUMN "pays",
DROP COLUMN "updatedAt",
DROP COLUMN "ville",
ADD COLUMN     "contact" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Consultant" DROP COLUMN "date_arrive";

-- AlterTable
ALTER TABLE "Experience" DROP COLUMN "createdAt",
DROP COLUMN "date_debut",
DROP COLUMN "date_fin",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Formation" DROP COLUMN "createdAt",
DROP COLUMN "date_debut",
DROP COLUMN "date_fin",
DROP COLUMN "updatedAt";

-- CreateIndex
CREATE UNIQUE INDEX "Client_contact_key" ON "Client"("contact");
