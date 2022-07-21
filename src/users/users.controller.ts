import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private todosService: UsersService) {}

  // CRUD
  @Post()
  async create(@Body() todo: CreateUserDto) {
    return await this.todosService.create(todo);
  }

  @Get()
  async  getAll() {
    return await this.todosService.getAll();
  }

  @Get(':id')
  async  getUserById(@Param('id') id: string) {
    return await this.todosService.getUserById(id);
  }

  @Get('/searchbymail/:email')
  async  getUserbyemail(@Param('email') email: string) {
     const userpass = this.todosService.findbyemail(email);
    return await userpass;
  }

  @Patch()
  async  update(@Body() todo: UpdateUserDto) {
    return await this.todosService.update(todo);
  }

  @Delete(':id')
 async delete(@Param('id') id: string) {
    return await this.todosService.delete(id);
  }


}
