import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
  } from '@nestjs/common';

import { CoursService } from './cours.service';
import { CreateCoursDto } from './dto/create-cours.dto';

import { UpdateCoursDto } from './dto/update-cours.dto';

import { ApiTags } from '@nestjs/swagger';
@ApiTags('Cours')
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
