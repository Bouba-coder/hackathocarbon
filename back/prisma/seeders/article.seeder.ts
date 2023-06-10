import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function articleSeeder() {
    // article
    const data = [
        {
            title: 'Article 1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl ultricies ul trices.',
            category: 'Technologie',
            authorId: 2,
        },
        {
            title: 'Article 2',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl ultricies ul trices.',
            category: 'Banque',
            authorId: 3,
        },
        {
            title: 'Article 3',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl ultricies ul trices.',
            category: 'Actualité',
            authorId: 4,
        },
        {
            title: 'Article 4',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl ultricies ul trices.',
            category: 'Finance',
            authorId: 2,
        },
        {
            title: 'Article 5',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl ultricies ul trices.',
            category: 'Technologies',
            authorId: 4,
        },
        
    ];

    await Promise.all(
        data.map(async (article) => {
            //create seeders with datas
            await prisma.article.create
                ({
                    data: {
                        ...article,
                        //                        createdAt: new Date(),
                        //                        updatedAt: new Date(),
                        //                        author: {
                        //                            connect: { id: article.authorId },
                        //                        },
                        //                        category: {
                        //                            connect: { id: article.categoryId },
                        //                        },
                    }
                });
        }
        )
    );
}