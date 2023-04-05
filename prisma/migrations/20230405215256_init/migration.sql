-- CreateTable
CREATE TABLE "Beers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "minimumTemperature" TEXT NOT NULL,
    "maximumTemperature" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
