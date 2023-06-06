import { PrismaClient } from "@prisma/client";
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export default async function usersSeeder() {
    const passwordUsers = await bcrypt.hash('password', 10);

    enum Role {
        ADMIN = 'ADMIN',
        CONSULTANT = 'CONSULTANT',
        RH = 'RH',
    }

    const data = [
        { 
            email: 'admin@gmail.com',
            firstName: 'caroline',
            lastName: 'legrand',
            password: passwordUsers,
            role: Role.ADMIN,
        },
        {
            email: 'micdu@gmail.com',
            firstName: 'michel',
            lastName: 'dupont',
            password: passwordUsers,
            role: Role.CONSULTANT,
        },
        {
            email: 'oreg@gmail.com',
            firstName: 'olivier',
            lastName: 'regnier',
            password: passwordUsers,
            role: Role.CONSULTANT,
        },
        {
            email: 'ast@gmail.com',
            firstName: 'astrid',
            lastName: 'toussaint',
            password: passwordUsers,
            role: Role.RH
        },
    ];

    await Promise.all(
        data.map(async (user) => {
            await prisma.user.upsert({
                where: { email: user.email },
                update: {},
                create: user,
            });
        }
    ));
}