import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateConsultantDto } from './dto/create-consultant.dto';
import { UpdateConsultantDto } from './dto/update-consultant.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ConsultantService {
  constructor(private prisma: PrismaService) {}

  async create(createConsultantDto: CreateConsultantDto) {
    const consultant = await this.prisma.consultant.create({
      data: {
        metier: createConsultantDto.metier,
        secteur: createConsultantDto.secteur,
        disponibilite: createConsultantDto.disponibilite,
        perimetre: createConsultantDto.perimetre,
        competences: createConsultantDto.competences,
        level: createConsultantDto.level,
        salaire: createConsultantDto.salaire,
        experiences: createConsultantDto.experiences,
        parcours: createConsultantDto.parcours,
        entreprise: createConsultantDto.entrepriseId == null ? {} : { connect: { id: createConsultantDto.entrepriseId } },
        user: {
          connect: {
            id: createConsultantDto.userId,
          },
        },
      },
    });

    return consultant;
  }

  async findAll() {
    const consultants = await this.prisma.consultant.findMany({
      include: {
        entreprise: true,
        user: true,
      },
    });

    return consultants;
  }

  async findOne(id: number) {
    const consultant = await this.prisma.consultant.findUnique({
      where: {
        userId: id,
      },
      include: {
        entreprise: true,
        user: true,
      },
    });

    if (!consultant) throw new HttpException('Consultant not found', HttpStatus.NOT_FOUND);

    return consultant;
  }

  async update(id: number, updateConsultantDto: UpdateConsultantDto) {
    const consultant = await this.prisma.consultant.findUnique({
      where: {
        userId: id,
      },
    });

    if (!consultant) throw new HttpException('Consultant not found', HttpStatus.NOT_FOUND);

    const updatedConsultant = await this.prisma.consultant.update({
      where: {
        userId: id,
      },
      data: {
        metier: updateConsultantDto.metier,
        secteur: updateConsultantDto.secteur,
        disponibilite: updateConsultantDto.disponibilite,
        perimetre: updateConsultantDto.perimetre,
        competences: updateConsultantDto.competences,
        level: updateConsultantDto.level,
        salaire: updateConsultantDto.salaire,
        experiences: updateConsultantDto.experiences,
        parcours: updateConsultantDto.parcours,
        entreprise: updateConsultantDto.entrepriseId == null ? {} : { connect: { id: updateConsultantDto.entrepriseId } },
        user: {
          connect: {
            id: updateConsultantDto.userId,
          },
        },
      },
    });

    return updatedConsultant;
  }

  async remove(id: number) {
    const consultant = await this.prisma.consultant.findUnique({
      where: {
        userId: id,
      },
    });

    if (!consultant) throw new HttpException('Consultant not found', HttpStatus.NOT_FOUND);

    const deletedConsultant = await this.prisma.consultant.delete({
      where: {
        userId: id,
      },
    });

    return deletedConsultant;
  }
}
