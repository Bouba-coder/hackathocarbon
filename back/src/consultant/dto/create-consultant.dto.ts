import { IsString, IsArray, IsInt, IsOptional, IsNumber } from "class-validator";

export class CreateConsultantDto {
    @IsOptional()
    @IsString()
    metier?: string;

    @IsOptional()
    @IsString()
    secteur?: string;

    @IsOptional()
    @IsString()
    disponibilite?: string;

    @IsOptional()
    @IsString()
    perimetre?: string;

    @IsOptional()
    @IsArray()
    competences?: string[];

    @IsOptional()
    @IsNumber()
    level?: number;

    @IsOptional()
    @IsInt()
    salaire?: number;

    @IsOptional()
    @IsArray()
    experiences?: string[];

    @IsOptional()
    @IsArray()
    parcours?: string[];

    @IsOptional()
    @IsNumber()
    entrepriseId?: number;

    @IsNumber()
    userId: number;
}