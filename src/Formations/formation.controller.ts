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
import { FormationsService } from './formation.service';
import { CreateFormationDto } from './dto/create-formation.dto';

import { UpdateFormationDto } from './dto/update-formation.dto';
@Controller('formations')
export class FormationsController {
    constructor(private formationsService: FormationsService) {}

    // CRUD
    @Post()
    async create(@Body() formation: CreateFormationDto) {
      return await this.formationsService.create(
        formation
      )
    }
  
    
    @Get()
    async getAll(
    ) {
      return await this.formationsService.getAll();
    }
  
    @Patch()
    async update(@Body() formation: UpdateFormationDto) {
      return await this.formationsService.update(formation);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string) {
      return await this.formationsService.delete(id);
    }
}
