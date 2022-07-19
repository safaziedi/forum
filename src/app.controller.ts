import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDecorator } from './users/user.decorator';
import { JwtAuthGuard } from './users/guards/jwt-guard.guard';
import { User } from './users/user.schema';

@Controller('/protected')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(JwtAuthGuard)
  @Get( )
  getHello(
    @UserDecorator() user: User
  ) {
    return this.appService.getHello(user);
  }
}