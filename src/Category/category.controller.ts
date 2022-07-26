import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post
  } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';

import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Category Formation')
@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService) {}

    // CRUD
    @Post()
    async create(@Body() category: CreateCategoryDto) {
      return await this.categoryService.create(
        category
      )
    }
  
    
    @Get()
    async getAll(
    ) {
      return await this.categoryService.getAll();
    }
  
    @Patch()
    async update(@Body() category: UpdateCategoryDto) {
      return await this.categoryService.update(category);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string) {
      return await this.categoryService.delete(id);
    }
}
