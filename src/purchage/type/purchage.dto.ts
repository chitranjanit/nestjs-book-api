import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PurchageDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'The book name of the book' })
  bookName: string;

  @IsString()
  @ApiProperty({ description: 'The quantity of the book' })
  quantity: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'The total price of the book' })
  total_price: string;

  @ApiProperty({ description: 'The payment method of the book' })
  payment_method: string;
}
