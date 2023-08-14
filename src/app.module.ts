import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { BookModule } from './book/book.module';
import { PurchageModule } from './purchage/purchage.module';

@Module({
  imports: [AuthModule, UserModule, PrismaModule, BookModule, PurchageModule],
})
export class AppModule {}
