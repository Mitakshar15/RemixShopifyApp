/*
  Warnings:

  - You are about to drop the `SavedProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "SavedProduct";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "savedProduct" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "imageUrl" TEXT,
    "productUrl" TEXT NOT NULL,
    "vendor" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "savedProduct_productId_shopId_key" ON "savedProduct"("productId", "shopId");
