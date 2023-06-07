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
    //return `This action returns all consultant`;
    const consultants : any = this.prisma.consultant.findMany();
    return consultants;
  }

  findOne(id: number) {
    //return `This action returns a #${id} consultant`;
    const consultant : any = this.prisma.consultant.findUnique({
      where: {
        id: id,
      },
    });

    return consultant;
  }

  update(id: number, updateConsultantDto: any) {
    //return `This action updates a #${id} consultant`;
    const consultant = this.prisma.consultant.update({
      where: {
        id: id,
      },
      data: updateConsultantDto,
    });

    return consultant;
  }

  remove(id: number) {
    //return `This action removes a #${id} consultant`;
    const consultant = this.prisma.consultant.delete({
      where: {
        id: id,
      },
    });

    return consultant;
  }
}
