import { IsString, IsEnum, IsArray, IsInt, IsDate, IsOptional } from "class-validator";
import { Role, Disponibilite, Experience, Formation, User, Client } from "@prisma/client";

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
    readonly experiences: Experience[];

    @IsArray()
    readonly formations: Formation[];

    @IsArray()
    readonly clients: Client[];

    @IsInt()
    readonly level: number;

    @IsInt()
    readonly salaire: number;

    @IsOptional()
    readonly user_id: number;
 
}
