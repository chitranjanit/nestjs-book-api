import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PurchageDto } from './type';
@Injectable()
export class PurchageService {
  constructor(private prisma: PrismaService) {}

  async create(dto: PurchageDto) {
    try {
      // save the new purchage in the db
      const purchage = await this.prisma.purchage.create({
        data: {
          bookName: dto.bookName,
          quantity: dto.quantity,
          total_price: dto.total_price,
          payment_method: dto.payment_method,
        },
      });

      // return the saved purchage
      return purchage;
    } catch (error) {
      throw error;
    }
  }

  async get() {
    try {
      // save the new purchage in the db
      const purchage = await this.prisma.purchage.findMany();

      // return the saved purchage
      return purchage;
    } catch (error) {
      throw error;
    }
  }
}
