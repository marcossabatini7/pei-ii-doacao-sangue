/*
  Warnings:

  - Added the required column `phone_number` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "blood_type" TEXT,
ADD COLUMN     "phone_number" TEXT NOT NULL,
ALTER COLUMN "profile_image" DROP NOT NULL;
