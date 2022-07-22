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
import { QestionsCoursService } from './questioncours.service';
import { CreateQestionsCoursDto } from './dto/questioncours.dto';

import { UpdateQestionsCoursDto } from './dto/updatequestioncours.dto';
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
