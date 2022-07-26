import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
  } from '@nestjs/common';
  import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';

import { UpdateCommentDto } from './dto/update-comment.dto';

import { ApiTags } from '@nestjs/swagger';
@ApiTags('Commentaire sur un cours')
@Controller('comments')
export class CommentsController {
    constructor(private commentsService: CommentsService) {}

    // CRUD
    @Post()
    async create(@Body() comment: CreateCommentDto, user : CreateUserDto) {
      return await this.commentsService.create(
        comment
      )
    }
  
    
    @Get()
    async getAll(
    ) {
      return await this.commentsService.getAll();
    }
  
    @Patch()
    async update(@Body() comment: UpdateCommentDto) {
      return await this.commentsService.update(comment);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string) {
      return await  this.commentsService.delete(id);
    }
}
