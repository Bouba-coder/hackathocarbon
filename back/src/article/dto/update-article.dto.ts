import { PartialType } from '@nestjs/mapped-types';
import { CreateArticleDto } from './create-article.dto';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateArticleDto extends PartialType(CreateArticleDto) {
    @IsOptional()
    @IsString()
    readonly title: string;

    @IsOptional()
    @IsString()
    readonly content: string;

    @IsOptional()
    @IsString()
    readonly category: string;
}
