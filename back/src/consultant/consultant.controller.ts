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
              create: [{
              nom_entreprise: createConsultantDto.experiences_nom_entreprise,
              poste: createConsultantDto.experiences_poste
            }]},
            formations: {
              create: [
                {
              nom: createConsultantDto.formations_nom,
              diplome: createConsultantDto.formations_diplome,
              niveau: createConsultantDto.formations_niveau
            }]
          },
            clients: {
              create: [{
              contact: createConsultantDto.clients_contact,
              nom: createConsultantDto.clients_nom,
              secteur: createConsultantDto.clients_secteur
            }]},
            level: createConsultantDto.level,
            salaire: createConsultantDto.salaire,
            userId: createConsultantDto.user_id
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
    console.log("patchhh consultant", updateConsultantDto)
    return this.consultantService.update(+id, updateConsultantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consultantService.remove(+id);
  }
}
