import { Controller, Get, Injectable, UseGuards } from "@nestjs/common";
import { User } from "@prisma/client";
import { AuthenticatedGuard } from "src/auth/authenticated.guard";
import { GetUser } from "src/auth/get-user.decorator";
import { LocalAuthGuard } from "src/auth/local-auth.guard";
import { UserService } from "./user.service";

@Controller("/api/v1/user")
@Injectable()
@UseGuards(AuthenticatedGuard)
export class UserController{

    constructor(private userService : UserService){}

    @Get("/me")
    loggedInUser(@GetUser() user : User){
        return this.userService.getLoggedInUser(user);
    }
}