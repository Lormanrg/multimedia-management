import { Transform } from 'class-transformer';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(3)
  userName: string;

  @IsEmail()
  @IsString()
  email: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(5)
  password: string;

  @IsString()
  role: string;
}
