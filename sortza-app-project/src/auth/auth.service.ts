import { ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { ILogin, IRegister } from "./dto/IAuth"
import * as bcrypt from "bcrypt"
import { Prisma, PrismaClient } from "@prisma/client";

@Injectable({})
export class AuthService {

  constructor(private prismaService: PrismaService) { }

  async register(iRegisterDto: IRegister) {

    //check if username exists
    const hashedPassword = await bcrypt.hash(iRegisterDto.password, 10)

    try {
      await this.prismaService.user.create({
        data: {
          email: iRegisterDto.email,
          username: iRegisterDto.username,
          password: hashedPassword
        }
      })

    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          throw new ForbiddenException("Credentials taken!");
        }
      }

      throw error;
    }
  }


  async login(username: string, password: string) {
    try {
      const user = await this.prismaService.user.findUnique({
        where: {
          username
        }
      });
      if (!user || !await bcrypt.compare(password, user.password)) {
        throw new NotFoundException("Invalid credentials try again!")
      }

      const { createdAt, password: currentPassword, ...rest } = user;

      return rest;

    } catch (error) {
      //handle
      throw error;
    }
  }


}