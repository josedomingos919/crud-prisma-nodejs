import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
    try {
        const res = await prisma.youtube_chanels.findMany({
            where: {
                subscribers: {
                    gte: 2345,
                },
            },
        });
        console.log(res);
    } catch (err) {
        console.log(err);
    } finally {
        async () => {
            await prisma.$disconnect();
        };
    }
};

main();
