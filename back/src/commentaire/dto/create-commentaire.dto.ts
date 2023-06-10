import { IsInt, IsString } from "class-validator";
export class CreateCommentaireDto {
    @IsString()
    readonly content: string;

    @IsInt()
    readonly authorId: number;

    @IsInt()
    readonly articleId: number;
}
