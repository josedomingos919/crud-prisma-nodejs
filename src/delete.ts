import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
    try {
        const res = await prisma.youtube_chanels.delete({
            where: { id: 4 },
        });

        console.log(res);
    } catch (errr) {
        console.log(errr);
    } finally {
        async () => {
            await prisma.$disconnect();
        };
    }
};

main();
