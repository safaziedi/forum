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
import { CoursService } from './cours.service';
import { CreateCoursDto } from './dto/create-cours.dto';

import { UpdateCoursDto } from './dto/update-cours.dto';
@Controller('cours')
export class CoursController {
    constructor(private coursService: CoursService) {}

    // CRUD
    @Post()
    async create(@Body() cours: CreateCoursDto) {
      return await this.coursService.create(
        cours
      )
    }
  
    
    @Get()
    async getAll(
    ) {
      return await this.coursService.getAll();
    }
  
    @Patch()
    async update(@Body() cours: UpdateCoursDto) {
      return await this.coursService.update(cours);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string) {
      return await this.coursService.delete(id);
    }
}
