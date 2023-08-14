import { Controller, Post, Body, Get } from '@nestjs/common';
import { PurchageService } from './purchage.service';
import { PurchageDto } from './type';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('purchage')
@Controller('purchage')
export class PurchageController {
  constructor(private purchageService: PurchageService) {}

  @ApiResponse({
    status: 200,
    description: 'purchage the book.',
  })
  @Post()
  create(@Body() dto: PurchageDto) {
    return this.purchageService.create(dto);
  }

  @ApiResponse({
    status: 200,
    description: 'get purchaged books.',
  })
  @Get()
  get() {
    return this.purchageService.get();
  }
}
