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
    create(@Body() comment: CreateCommentDto, user : CreateUserDto) {
      return this.commentsService.create(
        comment , user
      )
    }
  
    
    @Get()
    @UseGuards(JwtAuthGuard)
    getAll(
      @UserDecorator() user: User
    ) {
      return this.commentsService.getAll(user);
    }
  
    @Patch()
    update(@Body() comment: UpdateCommentDto) {
      return this.commentsService.update(comment);
    }
  
    @Delete(':id')
    delete(@Param('id') id: string) {
      return this.commentsService.delete(id);
    }
}
