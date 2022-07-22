import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    UseGuards,
  } from '@nestjs/common';
  import { CreateUserDto } from 'src/users/dto/create-user.dto';
  import { JwtAuthGuard } from 'src/users/guards/jwt-guard.guard';
  import { UserDecorator } from 'src/users/user.decorator';
  import { User } from 'src/users/user.schema';
import { ReponseQestionsCoursService } from './reponsequestioncours.service';
import { CreateReponseQestionsCoursDto } from './dto/reponsequestioncours.dto';

import { UpdateReponseQestionsCoursDto } from './dto/updatereponsequestioncours.dto';
@Controller('reponsequestioncours')
export class ReponseQestionsCoursController {
    constructor(private reponsequestioncoursService: ReponseQestionsCoursService) {}

    // CRUD
    @Post()
    async create(@Body() reponsequestioncours: CreateReponseQestionsCoursDto) {
      return await this.reponsequestioncoursService.create(
        reponsequestioncours
      )
    }
  
    
    @Get()
    async getAll(
    ) {
      return await this.reponsequestioncoursService.getAll();
    }
  
    @Patch()
    async update(@Body() reponsequestioncours: UpdateReponseQestionsCoursDto) {
      return await this.reponsequestioncoursService.update(reponsequestioncours);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string) {
      return await this.reponsequestioncoursService.delete(id);
    }
}
