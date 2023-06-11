import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await hash(createUserDto.password, 10);
    const user = await this.prisma.user.create({
      data: {
        email: createUserDto.email,
        firstName: createUserDto.firstName,
        lastName: createUserDto.lastName,
        password: hashedPassword,
        role: createUserDto.role,
      },
    });

    return user;
  }

  async findAll() {
    const users = await this.prisma.user.findMany({
      include: {
        formation: true,
      }
    });

    return users;
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        formation: true,
      }
    }
    );

    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    const updatedUser = await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        email: updateUserDto.email,
        firstName: updateUserDto.firstName,
        lastName: updateUserDto.lastName,
        role: updateUserDto.role,
      },
    });

    return updatedUser;
  }

  async remove(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    const deletedUser = await this.prisma.user.delete({
      where: {
        id,
      },
    });

    return deletedUser;
  }

  async findByEmail(email: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    return user;
  }

  async updatePassword(id: number, password: string) {
    const hashedPassword = await hash(password, 10);
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    const updatedUser = await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        password: hashedPassword,
      },
    });

    return updatedUser;
  }

  async subcribeToFormation(userId: number, formationId: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    const formation = await this.prisma.formation.findUnique({
      where: {
        id: formationId,
      },
    });

    if (!formation) throw new HttpException('Formation not found', HttpStatus.NOT_FOUND);

    const updatedUser = await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        formation: {
          connect: {
            id: formationId,
          },
        },
      },
    });

    return updatedUser;
  }

  async unsubscribeToFormation(userId: number, formationId: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    const formation = await this.prisma.formation.findUnique({
      where: {
        id: formationId,
      },
    });

    if (!formation) throw new HttpException('Formation not found', HttpStatus.NOT_FOUND);

    const updatedUser = await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        formation: {
          disconnect: {
            id: formationId,
          },
        },
      },
    });

    return updatedUser;
  }
}
