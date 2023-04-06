-- CreateTable
CREATE TABLE "Beer" (
    "id" TEXT NOT NULL,
    "styleName" TEXT NOT NULL,
    "minimumTemperature" TEXT NOT NULL,
    "maximumTemperature" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Beer_pkey" PRIMARY KEY ("id")
);
