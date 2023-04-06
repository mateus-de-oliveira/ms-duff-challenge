/*
  Warnings:

  - You are about to drop the column `averageTemperature` on the `Beer` table. All the data in the column will be lost.
  - Added the required column `roundedAverageTemperature` to the `Beer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Beer" DROP COLUMN "averageTemperature",
ADD COLUMN     "roundedAverageTemperature" INTEGER NOT NULL;
