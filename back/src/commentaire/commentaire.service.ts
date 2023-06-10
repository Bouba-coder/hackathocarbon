import { Injectable } from '@nestjs/common';
import { CreateCommentaireDto } from './dto/create-commentaire.dto';
import { UpdateCommentaireDto } from './dto/update-commentaire.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CommentaireService {

  constructor(private prisma: PrismaService){}

  create(createCommentaireDto: CreateCommentaireDto) {
    //return 'This action adds a new commentaire';
    return this.prisma.commentaire.create({
      data: createCommentaireDto
    })
  }

  findAll() {
    //return `This action returns all commentaire`;
    return this.prisma.commentaire.findMany()
  }

  findOne(id: number) {
    //return `This action returns a #${id} commentaire`;
    return this.prisma.commentaire.findUnique({
      where: {
        id: id
        }
    })
  }
  
// find all commentaire where articleId
  findAllByArticleId(articleId: number) {
    //return `This action returns all commentaire`;
    return this.prisma.commentaire.findMany({
      where: {
        articleId: articleId
        }
    })
  }

  // find all commentaire where userId
  findAllByUserId(userId: number) {
    //return `This action returns all commentaire`;
    return this.prisma.commentaire.findMany({
      where: {
        authorId: userId
        }
    })
  }

  update(id: number, updateCommentaireDto: UpdateCommentaireDto) {
    //return `This action updates a #${id} commentaire`;
    return this.prisma.commentaire.update({
      where: {
        id: id
      },
      data: updateCommentaireDto
    })
  }

  remove(id: number) {
    //return `This action removes a #${id} commentaire`;
    return this.prisma.commentaire.delete({
      where: {
        id: id
        }
    })
  }
}
