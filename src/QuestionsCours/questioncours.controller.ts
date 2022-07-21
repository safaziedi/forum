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
import { PrivateQuestionService } from './questioncours.service';
import { CreatePrivateQuestionDto } from './dto/questioncours.dto';

import { UpdatePrivateQuestionDto } from './dto/updatequestioncours.dto';
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
