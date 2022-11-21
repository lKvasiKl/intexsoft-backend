/*
  Warnings:

  - You are about to drop the `_ImageToPost` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ImageToPost" DROP CONSTRAINT "_ImageToPost_A_fkey";

-- DropForeignKey
ALTER TABLE "_ImageToPost" DROP CONSTRAINT "_ImageToPost_B_fkey";

-- DropTable
DROP TABLE "_ImageToPost";

-- CreateTable
CREATE TABLE "ImagesPosts" (
    "imageId" INTEGER NOT NULL,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "ImagesPosts_pkey" PRIMARY KEY ("imageId","postId")
);

-- AddForeignKey
ALTER TABLE "ImagesPosts" ADD CONSTRAINT "ImagesPosts_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImagesPosts" ADD CONSTRAINT "ImagesPosts_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
