/*
  Warnings:

  - A unique constraint covering the columns `[nom]` on the table `Formation` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Formation_nom_key" ON "Formation"("nom");
