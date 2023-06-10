import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function commentaireSeeder() {

    const data = [
        {
            content: 'Commentaire 1',
            authorId: 3,
            articleId: 1,
        },
        {
            content: 'Commentaire 2',
            authorId: 2,
            articleId: 3,
        },
        {
            content: 'Commentaire 3',
            authorId: 1,
            articleId: 4,
        },
        {
            content: 'Commentaire 4',
            authorId: 3,
            articleId: 1,
        }

    ];

    await Promise.all(
        data.map(async (commentaire) => {
            //create seeders with datas
            await prisma.commentaire.create
                ({
                    data: {
                        ...commentaire,
                        //                        createdAt: new Date(),
                        //                        updatedAt: new Date(),
                        //                        article: {
                        //                            connect: { id: commentaire.articleId },
                        //                        },
                        //                        author: {
                        //                            connect: { id: commentaire.authorId },
                        //                        },
                    }
                });
        }     
    ));
}