import { Controller, Post, Body, Get } from '@nestjs/common';
import { BookService } from './book.service';
import { BookDto } from './type';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('book')
@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @ApiResponse({
    status: 200,
    description: 'cretet the user.',
  })
  @Post()
  create(@Body() dto: BookDto) {
    return this.bookService.create(dto);
  }

  @ApiResponse({
    status: 200,
    description: 'get the book.',
  })
  @Get()
  get() {
    return this.bookService.get();
  }
}
