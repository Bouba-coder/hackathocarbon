import { IsString } from 'class-validator';

export class CreateFormationDto {
    @IsString()
    nom: string;

    @IsString()
    diplome: string;

    @IsString()
    niveau: string;
}