import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const data = [
        {
            name: 'José 1',
            description: 'soft',
            subscribers: 1333,
            link: 'https://teste.com',
        },
        {
            name: 'José 2',
            description: 'soft',
            subscribers: 2345,
            link: 'https://teste.com',
        },
        {
            name: 'José 3',
            description: 'soft',
            subscribers: 236,
            link: 'https://teste.com',
        },
    ];

    try {
        const res = await prisma.youtube_chanels.create({
            data: {
                name: 'José Ndonge 2',
                description: 'soft',
                subscribers: 33043,
                link: 'https://teste.com',
            },
        });
        // const res = await prisma.youtube_chanels.createMany({
        //     data,
        //     skipDuplicates: true,
        // });

        console.log(res);
    } catch (err) {
        console.log(err);
    } finally {
        async () => {
            await prisma.$disconnect();
        };
    }
}

main();
