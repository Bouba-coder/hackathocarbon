import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateEntrepriseDto } from './dto/create-entreprise.dto';
import { UpdateEntrepriseDto } from './dto/update-entreprise.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EntreprisesService {
  constructor(private prisma: PrismaService) {}

  async create(createEntrepriseDto: CreateEntrepriseDto) {
    const entreprise = await this.prisma.client.create({
      data: {
        ...createEntrepriseDto,
      },
    });

    return entreprise;
  }

  async findAll() {
    const entreprises = await this.prisma.client.findMany();

    return entreprises;
  }

  async findOne(id: number) {
    const entreprise = await this.prisma.client.findUnique({
      where: {
        id,
      },
    });

    if (!entreprise) throw new HttpException('Entreprise not found', HttpStatus.NOT_FOUND);

    return entreprise;
  }

  async update(id: number, updateEntrepriseDto: UpdateEntrepriseDto) {
    const entreprise = await this.prisma.client.findUnique({
      where: {
        id,
      },
    });

    if (!entreprise) throw new HttpException('Entreprise not found', HttpStatus.NOT_FOUND);

    const updatedEntreprise = await this.prisma.client.update({
      where: {
        id,
      },
      data: {
        ...updateEntrepriseDto,
      },
    });

    return updatedEntreprise;
  }

  async remove(id: number) {
    const entreprise = await this.prisma.client.findUnique({
      where: {
        id,
      },
    });

    if (!entreprise) throw new HttpException('Entreprise not found', HttpStatus.NOT_FOUND);

    await this.prisma.client.delete({
      where: {
        id,
      },
    });

    return entreprise;
  }
}
