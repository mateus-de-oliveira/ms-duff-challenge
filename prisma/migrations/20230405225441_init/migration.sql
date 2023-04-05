/*
  Warnings:

  - You are about to drop the `Beers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Beers";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Beer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "styleName" TEXT NOT NULL,
    "minimumTemperature" TEXT NOT NULL,
    "maximumTemperature" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
