-- CreateTable
CREATE TABLE "SavedProduct" (
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
CREATE UNIQUE INDEX "SavedProduct_productId_shopId_key" ON "SavedProduct"("productId", "shopId");
