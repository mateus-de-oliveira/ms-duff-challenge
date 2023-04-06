-- CreateTable
CREATE TABLE "Beer" (
    "id" TEXT NOT NULL,
    "styleName" TEXT NOT NULL,
    "minimumTemperature" INTEGER NOT NULL,
    "maximumTemperature" INTEGER NOT NULL,
    "averageTemperature" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Beer_pkey" PRIMARY KEY ("id")
);
