/*
  Warnings:

  - You are about to drop the `ImagesPosts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UsersLikedPosts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ImagesPosts" DROP CONSTRAINT "ImagesPosts_imageId_fkey";

-- DropForeignKey
ALTER TABLE "ImagesPosts" DROP CONSTRAINT "ImagesPosts_postId_fkey";

-- DropForeignKey
ALTER TABLE "UsersLikedPosts" DROP CONSTRAINT "UsersLikedPosts_postId_fkey";

-- DropForeignKey
ALTER TABLE "UsersLikedPosts" DROP CONSTRAINT "UsersLikedPosts_userId_fkey";

-- DropTable
DROP TABLE "ImagesPosts";

-- DropTable
DROP TABLE "UsersLikedPosts";

-- CreateTable
CREATE TABLE "_ImageToPost" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ImageToPost_AB_unique" ON "_ImageToPost"("A", "B");

-- CreateIndex
CREATE INDEX "_ImageToPost_B_index" ON "_ImageToPost"("B");

-- AddForeignKey
ALTER TABLE "_ImageToPost" ADD CONSTRAINT "_ImageToPost_A_fkey" FOREIGN KEY ("A") REFERENCES "Image"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ImageToPost" ADD CONSTRAINT "_ImageToPost_B_fkey" FOREIGN KEY ("B") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
