import { IsBoolean, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: string;
  @IsString()
  password: string;
  @IsBoolean()
  isConsultant: boolean;
  @IsBoolean()
  isRh: boolean;
}
