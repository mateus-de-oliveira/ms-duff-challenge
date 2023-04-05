/*
  Warnings:

  - Added the required column `styleName` to the `Beers` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Beers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "styleName" TEXT NOT NULL,
    "minimumTemperature" TEXT NOT NULL,
    "maximumTemperature" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Beers" ("createdAt", "id", "maximumTemperature", "minimumTemperature", "updatedAt") SELECT "createdAt", "id", "maximumTemperature", "minimumTemperature", "updatedAt" FROM "Beers";
DROP TABLE "Beers";
ALTER TABLE "new_Beers" RENAME TO "Beers";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
