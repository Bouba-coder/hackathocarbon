import { IsString, IsEnum, IsArray, IsInt, IsDate, IsOptional } from "class-validator";
import { Role, Disponibilite, Experience, Formation, User, Client } from "@prisma/client";


export interface experiences {
    nom_entreprise: string;
    poste: string;
}
export class CreateConsultantDto {
    @IsString()
    readonly email: string;
    
    @IsEnum(Role)
    readonly role: Role;
    
    @IsString()
    readonly metier: string;

    @IsString()
    readonly secteur: string;

    @IsEnum(Disponibilite)
    readonly disponibilite: Disponibilite;

    @IsString()
    readonly perimetre: string;

    @IsArray()
    readonly competences: string[];

    @IsString()
    readonly experiences_nom_entreprise: string;

    @IsString()
    readonly experiences_poste: string;

    @IsString()
    readonly formations_nom: string;

    @IsString()
    readonly formations_diplome: string;

    @IsString()
    readonly formations_niveau: string;

    @IsString()
    readonly clients_contact: string;

    @IsString()
    readonly clients_nom: string;

    @IsString()
    readonly clients_secteur: string;

    @IsInt()
    readonly level: number;

    @IsInt()
    readonly salaire: number;

    @IsInt()
    readonly user_id: number;
 
}