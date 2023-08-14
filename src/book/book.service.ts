import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BookDto } from './type';
@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  async create(dto: BookDto) {
    try {
      // save the new book in the db
      const book = await this.prisma.book.create({
        data: {
          title: dto.title,
          description: dto.description,
          discountRate: dto.discountRate,
          coverImage: dto.coverImage,
          price: dto.price,
        },
      });

      // return the saved book
      return book;
    } catch (error) {
      throw error;
    }
  }

  async get() {
    try {
      // save the new book in the db
      const book = await this.prisma.book.findMany();

      // return the saved book
      return book;
    } catch (error) {
      throw error;
    }
  }
}
