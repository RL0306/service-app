import { Injectable } from "@nestjs/common";
import { PrismaClient, User } from "@prisma/client";
import { GetUser } from "src/auth/get-user.decorator";

@Injectable()
export class UserService{
    // constructor(private prismaClient : PrismaClient){}

    getLoggedInUser(@GetUser() user : User){
        return user;
    }
}