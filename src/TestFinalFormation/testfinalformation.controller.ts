import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
  } from '@nestjs/common';
import { TestFinalFormationService } from './testfinalformation.service';
import { CreateTestFinalFormationDto } from './dto/testfinalformation.dto';

import { UpdateTestFinalFormationDto } from './dto/updatetestfinalformation.dto';

import { ApiTags } from '@nestjs/swagger';
@ApiTags('Test Final')
@Controller('TestFinalFormation')
export class TestFinalFormationController {
    constructor(private TestFinalFormationService: TestFinalFormationService) {}

    // CRUD
    @Post()
    async create(@Body() TestFinalFormation: CreateTestFinalFormationDto) {
      return await this.TestFinalFormationService.create(
        TestFinalFormation
      )
    }
  
    
    @Get()
    async getAll(
    ) {
      return await this.TestFinalFormationService.getAll();
    }
  
    @Patch()
    async update(@Body() TestFinalFormation: UpdateTestFinalFormationDto) {
      return await this.TestFinalFormationService.update(TestFinalFormation);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string) {
      return await this.TestFinalFormationService.delete(id);
    }
}
