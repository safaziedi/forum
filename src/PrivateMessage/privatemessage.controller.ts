import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
  } from '@nestjs/common';
import { PrivateMessageService } from './privatemessage.service';
import { CreatePrivateMessageDto } from './dto/privatemessage.dto';

import { UpdatePrivateMessageDto } from './dto/updateprivatemessage.dto';

import { ApiTags } from '@nestjs/swagger';
@ApiTags('Private Question')
@Controller('privateQuestion')
export class PrivateMessageController {
    constructor(private privateQuestionService: PrivateMessageService) {}

    // CRUD
    @Post()
    async create(@Body() privateQuestion: CreatePrivateMessageDto) {
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
    async update(@Body() privateQuestion: UpdatePrivateMessageDto) {
      return await this.privateQuestionService.update(privateQuestion);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string) {
      return await this.privateQuestionService.delete(id);
    }
}
