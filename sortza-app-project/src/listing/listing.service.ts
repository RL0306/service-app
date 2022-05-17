import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { GetUser } from "src/auth/get-user.decorator";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ListingService {
  constructor(private prismaService: PrismaService) { }

  create(@GetUser() user: User) {
    return user;
  }
}