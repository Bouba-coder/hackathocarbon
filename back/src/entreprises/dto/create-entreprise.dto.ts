import { IsString } from 'class-validator';

export class CreateEntrepriseDto {
    @IsString()
    nom: string;

    @IsString()
    contact?: string;
}