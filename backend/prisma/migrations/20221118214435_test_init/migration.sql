-- CreateTable
CREATE TABLE `Product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `categoryId` INTEGER NOT NULL,
    `brand` VARCHAR(255) NOT NULL,
    `price` INTEGER NOT NULL,
    `available` ENUM('IN_STORE', 'WEB_ONLY', 'UNAVAILABLE') NOT NULL DEFAULT 'IN_STORE',
    `discount` VARCHAR(191) NULL,
    `type` VARCHAR(191) NOT NULL,
    `view` INTEGER NOT NULL,
    `promoted` BOOLEAN NOT NULL DEFAULT false,
    `type_info` JSON NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Product_categoryId_idx`(`categoryId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
