import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}
const prisma =
    global.prisma ||
    new PrismaClient({
        log: process.env.NODE_ENV === 'development' ? ['query'] : [],
    });
export default prisma;

if (process.env.NODE_ENV === 'development') {
    global.prisma = prisma;
}