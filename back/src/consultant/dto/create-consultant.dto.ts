import { IsString, IsEnum, IsArray, IsInt, IsDate, IsOptional } from "class-validator";
import { Role, Disponibilite, Formation, User, Client } from "@prisma/client";

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

    @IsArray()
    readonly experiences: string[];

    @IsArray()
    readonly formations: string[];

    @IsInt()
    readonly actuel_entrepriseId: number;

    @IsInt()
    readonly level: number;

    @IsInt()
    readonly salaire: number;

    @IsInt()
    readonly user_id: number;
 
}