import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class BookDto {
  @ApiProperty({ description: 'The title of the book' })
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsString()
  @ApiProperty({ description: 'The description of the book' })
  description: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'The discount rate of the book' })
  discountRate: string;

  @ApiProperty({ description: 'The cover image of the book' })
  coverImage: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'The price of the book' })
  price: string;
}
