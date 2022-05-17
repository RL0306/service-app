import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ListingModule } from './listing/listing.module';

@Module({
  imports: [AuthModule, UserModule, PrismaModule, ListingModule]
})
export class AppModule { }
