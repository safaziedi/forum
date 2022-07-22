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
import { TestFinalFormationService } from './testfinalformation.service';
import { CreateTestFinalFormationDto } from './dto/testfinalformation.dto';

import { UpdateTestFinalFormationDto } from './dto/updatetestfinalformation.dto';
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
