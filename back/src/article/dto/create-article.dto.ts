import { IsInt, IsOptional, IsString, isString } from "class-validator";

export class CreateArticleDto {
    @IsString()
    readonly title: string;

    @IsString()
    readonly content: string;

    @IsString()
    readonly category: string;

    @IsInt()
    readonly authorId: number;
}
