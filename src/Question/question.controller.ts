import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
  } from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/question.dto';

import { UpdateQuestionDto } from './dto/updatequestion.dto';

import { ApiTags } from '@nestjs/swagger';
@ApiTags('Question')
@Controller('question')
export class QuestionController {
    constructor(private questionService: QuestionService) {}

    // CRUD
    @Post()
    async create(@Body() question: CreateQuestionDto) {
      
      return await this.questionService.create(
        question
      )
    }
  
    
    @Get()
    async getAll(
    ) {
      return await this.questionService.getAll();
    }
  
    @Patch()
    async update(@Body() question: UpdateQuestionDto) {
      return await this.questionService.update(question);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string) {
      return await this.questionService.delete(id);
    }
}
