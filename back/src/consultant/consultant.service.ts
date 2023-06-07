import { Injectable } from '@nestjs/common';
import { CreateConsultantDto } from './dto/create-consultant.dto';
import { UpdateConsultantDto } from './dto/update-consultant.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ConsultantService {

  constructor(private prisma: PrismaService) {}

  create(createConsultantDto: any) {
    //return 'This action adds a new consultant';
    const consultant = this.prisma.consultant.create(
      { data: createConsultantDto }
      );

    console.log("create consultant", consultant)
    return consultant;
  }

  findAll() {
    const consultants : any = this.prisma.consultant.findMany();
    return consultants;
  }

  findOne(id: number) {
    const consultant : any = this.prisma.consultant.findUnique({
      where: {
        id: id,
      },
    });

    return consultant;
  }

  update(id: number, updateConsultantDto: UpdateConsultantDto) {
    const consultant = this.prisma.consultant.update({
      where: {
        id: id,
      },
      data: updateConsultantDto,
    });

    return consultant;
  }

  remove(id: number) {
    const consultant = this.prisma.consultant.delete({
      where: {
        id: id,
      },
    });

    return consultant;
  }
}
