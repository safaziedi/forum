import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
  } from '@nestjs/common';
import { QestionsCoursService } from './questioncours.service';
import { CreateQestionsCoursDto } from './dto/questioncours.dto';

import { UpdateQestionsCoursDto } from './dto/updatequestioncours.dto';

import { ApiTags } from '@nestjs/swagger';
@ApiTags('Questions sur un cours QCM')
@Controller('questioncours')
export class QestionsCoursController {
    constructor(private questioncoursService: QestionsCoursService) {}

    // CRUD
    @Post()
    async create(@Body() questioncours: CreateQestionsCoursDto) {
      return await this.questioncoursService.create(
        questioncours
      )
    }
  
    
    @Get()
    async getAll(
    ) {
      return await this.questioncoursService.getAll();
    }
  
    @Patch()
    async update(@Body() questioncours: UpdateQestionsCoursDto) {
      return await this.questioncoursService.update(questioncours);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string) {
      return await this.questioncoursService.delete(id);
    }
}
