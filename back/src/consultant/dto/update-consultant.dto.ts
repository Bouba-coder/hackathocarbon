import { PartialType } from '@nestjs/mapped-types';
import { CreateConsultantDto } from './create-consultant.dto';
import { IsArray, IsEmail, IsEnum, IsInt, IsOptional, IsString } from 'class-validator';
import { Disponibilite, Role } from '@prisma/client';

export class UpdateConsultantDto extends PartialType(CreateConsultantDto) {
    @IsOptional()
    @IsString()
    readonly email: string;
    
    @IsOptional()
    @IsEnum(Role)
    readonly role: Role;

    @IsOptional()
    @IsString()
    readonly metier: string;

    @IsOptional()
    @IsString()
    readonly secteur: string;

    @IsOptional()
    @IsEnum(Disponibilite)
    readonly disponibilite: Disponibilite;

    @IsOptional()
    @IsString()
    readonly perimetre: string;

    @IsOptional()
    @IsArray()
    readonly competences: string[];

    @IsOptional()
    @IsString()
    readonly experiences_nom_entreprise: string;

    @IsOptional()
    @IsString()
    readonly experiences_poste: string;

    @IsOptional()
    @IsString()
    readonly formations_nom: string;

    @IsOptional()
    @IsString()
    readonly formations_diplome: string;

    @IsOptional()
    @IsString()
    readonly formations_niveau: string;

    @IsOptional()
    @IsString()
    readonly clients_contact: string;

    @IsOptional()
    @IsString()
    readonly clients_nom: string;

    @IsOptional()
    @IsString()
    readonly clients_secteur: string;

    @IsOptional()
    @IsInt()
    readonly level: number;

    @IsOptional()
    @IsInt()
    readonly salaire: number;

    @IsOptional()
    @IsInt()
    readonly user_id: number;
}
