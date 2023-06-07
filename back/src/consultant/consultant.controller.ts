import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConsultantService } from './consultant.service';
import { CreateConsultantDto } from './dto/create-consultant.dto';
import { UpdateConsultantDto } from './dto/update-consultant.dto';

@Controller('consultant')
export class ConsultantController {
  constructor(private readonly consultantService: ConsultantService) {}

  @Post()
  create(@Body() createConsultantDto: CreateConsultantDto) {
    console.log("data", createConsultantDto);
    const consultant = this.consultantService.create({
            email: createConsultantDto.email,
            metier: createConsultantDto.metier,
            secteur: createConsultantDto.secteur,
            disponibilite: createConsultantDto.disponibilite,
            perimetre: createConsultantDto.perimetre,
            competences: createConsultantDto.competences,
            experiences: {
              create: [createConsultantDto.experiences]},
            formations: {
              create: [
                {
              nom: 'toto formation',
              diplome: 'license',
              niveau: 'expert'
            }]
          },
            clients: {
              create: [{
              contact: 'toto 2',
              nom: 'entreprise client',
              secteur: 'secteur client'
            }]},
            level: 2,
            salaire: 3000,
            userId: 3
});
return consultant;

}

  @Get()
  findAll() {
    return this.consultantService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consultantService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConsultantDto: UpdateConsultantDto) {
    return this.consultantService.update(+id, updateConsultantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consultantService.remove(+id);
  }
}
