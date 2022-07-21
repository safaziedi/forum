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
  import { CreatePostDto } from './dto/create-post.dto';
  import { UpdatePostDto } from './dto/update-post.dto';
  import { PostsService } from './posts.service';
@Controller('posts')
export class PostsController {
    constructor(private postsService: PostsService) {}



  // CRUD
  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() post: CreatePostDto,@UserDecorator() author : User) {
    return await this.postsService.create(
      post , author
    )
  }

  
  @Get()
  @UseGuards(JwtAuthGuard)
  async getAll(
    @UserDecorator() user: User
  ) {
    return await this.postsService.getAll(user);
  }

  @Patch()
  @UseGuards(JwtAuthGuard)
  async update(@Body() post: UpdatePostDto) {
    return await this.postsService.update(post);
  }

  @Get(':id')
  async findpostbyid(@Param('id') id: string) {
    return await this.postsService.findpostbyid(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.postsService.delete(id);
  }
}
