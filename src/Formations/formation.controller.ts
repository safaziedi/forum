import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
  } from '@nestjs/common';
import { FormationsService } from './formation.service';
import { CreateFormationDto } from './dto/create-formation.dto';

import { UpdateFormationDto } from './dto/update-formation.dto';

import { ApiTags } from '@nestjs/swagger';
@ApiTags('Formation')
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
