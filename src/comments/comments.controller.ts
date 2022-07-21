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
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';

import { UpdateCommentDto } from './dto/update-comment.dto';
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
