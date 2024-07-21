import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/localAuth.guard';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwtAuth.gaurd';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService, private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  login(@Request() req) {
    return this.authService.login(req.user);
  }

  // @UseGuards(AuthenticatedGuard) // this authinticate all request using session
  @UseGuards(JwtAuthGuard) // this authinticate all request using jwt
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
