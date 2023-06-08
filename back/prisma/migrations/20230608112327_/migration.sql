/*
  Warnings:

  - The `experiences` column on the `Consultant` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `parcours` column on the `Consultant` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Consultant" DROP COLUMN "experiences",
ADD COLUMN     "experiences" JSONB[],
DROP COLUMN "parcours",
ADD COLUMN     "parcours" JSONB[];
