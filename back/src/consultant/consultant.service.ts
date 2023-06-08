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
        ...createConsultantDto,
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
        id: id,
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
        id: id,
      },
    });

    if (!consultant) throw new HttpException('Consultant not found', HttpStatus.NOT_FOUND);

    const updatedConsultant = await this.prisma.consultant.update({
      where: {
        id: id,
      },
      data: {
        ...updateConsultantDto,
      },
    });

    return updatedConsultant;
  }

  async remove(id: number) {
    const consultant = await this.prisma.consultant.findUnique({
      where: {
        id: id,
      },
    });

    if (!consultant) throw new HttpException('Consultant not found', HttpStatus.NOT_FOUND);

    const deletedConsultant = await this.prisma.consultant.delete({
      where: {
        id: id,
      },
    });

    return deletedConsultant;
  }
}
