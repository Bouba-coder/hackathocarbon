import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticleService {

    constructor(private prisma: PrismaService){}

  create(createArticleDto: CreateArticleDto) {
    //return 'This action adds a new article';
    return this.prisma.article.create({
      data: createArticleDto,
    })

  }

  findAll() {
    //return `This action returns all article`;
    return this.prisma.article.findMany();
  }

  findOne(id: number) {
    //return `This action returns a #${id} article`;
    return this.prisma.article.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    //return `This action updates a #${id} article`;
    return this.prisma.article.update({
      where: {
        id: id,
      },
      data: updateArticleDto,
    });
  }

  remove(id: number) {
    //return `This action removes a #${id} article`;
    return this.prisma.article.delete({
      where: {
        id: id,
      },
    });
  }
}
