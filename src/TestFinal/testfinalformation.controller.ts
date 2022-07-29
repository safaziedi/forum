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
@Controller('testFinal')
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
  

    @Get(':id')
    async getTestFinalById(@Param('id') testId: string) {
      return await this.TestFinalFormationService.getTestFinalById(testId);
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
