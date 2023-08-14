-- DropForeignKey
ALTER TABLE "book" DROP CONSTRAINT "book_userId_fkey";

-- AlterTable
ALTER TABLE "book" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "book" ADD CONSTRAINT "book_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
