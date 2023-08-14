-- CreateTable
CREATE TABLE "purchage" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "bookName" TEXT NOT NULL,
    "quantity" TEXT,
    "total_price" TEXT,
    "payment_method" TEXT,
    "userId" INTEGER,

    CONSTRAINT "purchage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "purchage" ADD CONSTRAINT "purchage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
