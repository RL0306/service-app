import { Body, Controller, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { ILogin, IRegister } from "./dto/IAuth";
import { LocalAuthGuard } from "./local-auth.guard";

@Controller("/api/v1/auth")
export class AuthController {


  constructor(private authService: AuthService) { }

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