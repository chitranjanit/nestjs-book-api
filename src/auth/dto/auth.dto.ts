import { IsNotEmpty, IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ description: 'The email for sinup' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'The password for sinup' })
  password: string;
}
