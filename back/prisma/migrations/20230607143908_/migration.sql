/*
  Warnings:

  - A unique constraint covering the columns `[nom]` on the table `Client` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Client_nom_key" ON "Client"("nom");
