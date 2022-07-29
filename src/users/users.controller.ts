import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

  // CRUD
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    if (createUserDto.role == 'ADMIN')
    {
      const {email , password , role} =createUserDto
      const createAdminDto = {email , password , role}
      
      return await this.usersService.createAdmin(createAdminDto);
    }

    if (createUserDto.role == 'ETUDIANT')
    {
      const {nom ,prenom,email , password , role ,note ,testPassed } =createUserDto
      const createEtudiantDto = {nom ,prenom,email , password , role ,note ,testPassed}
      
      return await this.usersService.createEtudiant(createEtudiantDto);
    }

    if (createUserDto.role == 'FORMATEUR')
    {
      const {nom ,prenom,email , password , role ,specialite} =createUserDto
      const createFormateurDto = {nom ,prenom,email , password , role , specialite }
      
      return await this.usersService.createFormateur(createFormateurDto);
    }

    
    return await this.usersService.create(createUserDto);
  }

  @Get()
  async  getAll() {
    return await this.usersService.getAll();
  }

  @Get(':id')
  async  getUserById(@Param('id') id: string) {
    return await this.usersService.getUserById(id);
  }

  @Get('/searchbymail/:email')
  async  getUserbyemail(@Param('email') email: string) {
     const userpass = this.usersService.findbyemail(email);
    return await userpass;
  }

  @Patch(':id')
  async  update(@Param('id') id: string,@Body() user: UpdateUserDto) {
    return await this.usersService.updateProfile(id,user);
  }

  @Delete(':id')
 async delete(@Param('id') id: string) {
    return await this.usersService.delete(id);
  }


}
