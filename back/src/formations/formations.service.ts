import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateFormationDto } from './dto/create-formation.dto';
import { UpdateFormationDto } from './dto/update-formation.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FormationsService {
  constructor(private prisma: PrismaService) {}

  async create(createFormationDto: CreateFormationDto) {
    const formation = await this.prisma.formation.create({
      data: {
        ...createFormationDto,
      },
    });

    return formation;
  }

  async findAll() {
    const formations = await this.prisma.formation.findMany();

    return formations;
  }

  async findOne(id: number) {
    const formation = await this.prisma.formation.findUnique({
      where: {
        id,
      },
    });

    return formation;
  }

  async update(id: number, updateFormationDto: UpdateFormationDto) {
    const formation = await this.prisma.formation.findUnique({
      where: {
        id,
      },
    });

    if (!formation) throw new HttpException('Formation not found', HttpStatus.NOT_FOUND);

    const updatedFormation = await this.prisma.formation.update({
      where: {
        id,
      },
      data: {
        ...updateFormationDto,
      },
    });

    return updatedFormation;
  }

  async remove(id: number) {
    const formation = await this.prisma.formation.findUnique({
      where: {
        id,
      },
    });

    if (!formation) throw new HttpException('Formation not found', HttpStatus.NOT_FOUND);

    const deletedFormation = await this.prisma.formation.delete({
      where: {
        id,
      },
    });

    return deletedFormation;
  }
}
