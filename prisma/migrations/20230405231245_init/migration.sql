/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `Beer` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Beer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "styleName" TEXT NOT NULL,
    "minimumTemperature" TEXT NOT NULL,
    "maximumTemperature" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Beer" ("createdAt", "id", "maximumTemperature", "minimumTemperature", "styleName") SELECT "createdAt", "id", "maximumTemperature", "minimumTemperature", "styleName" FROM "Beer";
DROP TABLE "Beer";
ALTER TABLE "new_Beer" RENAME TO "Beer";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
