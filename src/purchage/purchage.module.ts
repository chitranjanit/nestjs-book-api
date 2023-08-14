import { Module } from '@nestjs/common';
import { PurchageController } from './purchage.controller';
import { PurchageService } from './purchage.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PurchageController],
  providers: [PurchageService],
})
export class PurchageModule {}
