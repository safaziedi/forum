import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
  } from '@nestjs/common';
import { PrivateQuestionService } from './privatequestion.service';
import { CreatePrivateQuestionDto } from './dto/privatequestion.dto';

import { UpdatePrivateQuestionDto } from './dto/updateprivatequestion.dto';

import { ApiTags } from '@nestjs/swagger';
@ApiTags('Private Question')
@Controller('privateQuestion')
export class PrivateQuestionController {
    constructor(private privateQuestionService: PrivateQuestionService) {}

    // CRUD
    @Post()
    async create(@Body() privateQuestion: CreatePrivateQuestionDto) {
      return await this.privateQuestionService.create(
        privateQuestion
      )
    }
  
    
    @Get()
    async getAll(
    ) {
      return await this.privateQuestionService.getAll();
    }
  
    @Patch()
    async update(@Body() privateQuestion: UpdatePrivateQuestionDto) {
      return await this.privateQuestionService.update(privateQuestion);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string) {
      return await this.privateQuestionService.delete(id);
    }
}
