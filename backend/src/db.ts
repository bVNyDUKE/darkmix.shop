import { PrismaClient } from "@prisma/client";

interface CustomNodeJsGlobal extends Global {
  prisma: PrismaClient;
}

declare const global: CustomNodeJsGlobal;

const prisma = global.prisma || new PrismaClient();

//Prevents HMR from creating new instances
if (process.env.NODE_ENV === "development") global.prisma = prisma;

export default prisma;
