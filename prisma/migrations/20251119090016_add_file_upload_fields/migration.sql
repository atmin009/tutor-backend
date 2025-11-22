-- AlterTable
ALTER TABLE `course` ADD COLUMN `previewVideoUrl` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `section` ADD COLUMN `attachmentUrl` VARCHAR(191) NULL,
    ADD COLUMN `videoUrl` VARCHAR(191) NULL;
