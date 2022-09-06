import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
    try {
        // const res = await prisma.youtube_chanels.updateMany({
        //     where: {
        //         subscribers: {
        //             lt: 2345,
        //         },
        //     },
        //     data: {
        //         subscribers: 2000,
        //     },
        // });

        const res = await prisma.youtube_chanels.update({
            where: {
                id: 1,
            },
            data: {
                subscribers: 30,
            },
        });

        console.log(res);
    } catch (err) {
        console.log(err);
    } finally {
        async () => {
            prisma.$disconnect();
        };
    }
};

main();
