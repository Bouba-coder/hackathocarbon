import { IsString } from 'class-validator';

export class CreateEntrepriseDto {
    @IsString()
    contact: string;

    @IsString()
    nom: string;

    @IsString()
    secteur: string;
}
