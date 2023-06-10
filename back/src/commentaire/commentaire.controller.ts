import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommentaireService } from './commentaire.service';
import { CreateCommentaireDto } from './dto/create-commentaire.dto';
import { UpdateCommentaireDto } from './dto/update-commentaire.dto';

@Controller('commentaire')
export class CommentaireController {
  constructor(private readonly commentaireService: CommentaireService) {}

  @Post()
  create(@Body() createCommentaireDto: CreateCommentaireDto) {
    return this.commentaireService.create(createCommentaireDto);
  }

  @Get()
  findAll() {
    return this.commentaireService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentaireService.findOne(+id);
  }

  //find all commentaire where articleId
  @Get('article/:articleId')
  findAllByArticleId(@Param('articleId') articleId: string) {
    return this.commentaireService.findAllByArticleId(+articleId);
  }

  //find all commentaire where userId
  @Get('user/:userId')
  findAllByUserId(@Param('userId') userId: string) {
    return this.commentaireService.findAllByUserId(+userId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommentaireDto: UpdateCommentaireDto) {
    return this.commentaireService.update(+id, updateCommentaireDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentaireService.remove(+id);
  }
}
