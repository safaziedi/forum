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
  import { User } from 'src/users/user.model';
  import { CreatePostDto } from './dto/create-post.dto';
  import { UpdatePostDto } from './dto/update-post.dto';
  import { PostsService } from './posts.service';
@Controller('posts')
export class PostsController {
    constructor(private postsService: PostsService) {}

  // CRUD
  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() post: CreatePostDto,   @UserDecorator() user: User) {
    return this.postsService.create(
      post , user
    )
  }

  
  @Get()
  @UseGuards(JwtAuthGuard)
  getAll(
    @UserDecorator() user: User
  ) {
    return this.postsService.getAll(user);
  }

  @Patch()
  @UseGuards(JwtAuthGuard)
  update(@Body() post: UpdatePostDto) {
    return this.postsService.update(post);
  }

  @Get(':id')
  findpostbyid(@Param('id') id: string) {
    return this.postsService.findpostbyid(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.postsService.delete(id);
  }
}
