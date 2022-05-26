import { Body, Controller, Post, Get, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { IRegister } from "./dto/authDTO";
import { LocalAuthGuard } from "./local-auth.guard";

@Controller("/api/v1/auth")
export class AuthController {


  constructor(private authService: AuthService) { }

  @Get("")
  test(){
    return {test:"test"};
  }

  @Post("/register")
  register(@Body() iRegisterDto: IRegister) {
    return this.authService.register(iRegisterDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post("/login")
  login(@Request() req) {
    return { msg: "Logged in!" };
  }

}