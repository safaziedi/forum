import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { authDto } from './dto';
@Controller('auth')
export class AuthController {
    constructor(private authService : AuthService){}

    @Post('/signin')
    async signinLocal(@Body() dto:authDto){
        return await this.authService.signinLocal(dto)
    }

    @Post('/singup')
    async signupLocal(@Body() dto:authDto){
        return await this.authService.signupLocal(dto)
    }

    @Post('logout')
    async logoutLocal(@Res({ passthrough: true }) response: Response) {
      response.clearCookie('jwt');
  
      return  {
        message: 'logged out successfully ',
      };
    }

}
