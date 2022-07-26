import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UserDecorator } from 'src/users/user.decorator';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './category.schema';
import { Formation } from 'src/Formations/formation.schema';
import { FormationsService } from 'src/Formations/formation.service';
@Injectable()
export class CategoryService {


    
  constructor(
    @InjectModel('Category') private CategoryModel: Model<Category>,
    //private FormationModel: Model<Formation>,
    private formationsService: FormationsService
  ) {}

    async create(createCategoryDto: CreateCategoryDto 
      ): Promise<Category> {
        const newCategory = await this.CategoryModel.create(createCategoryDto)
        const result = await newCategory.save()
        

        return newCategory;
      }


    async getAll(): Promise<Category[]> {
        return this.CategoryModel.find().populate('formationId');
      }


      async update(category: UpdateCategoryDto) {
        const updateCategory = new this.CategoryModel(category);
        return updateCategory.save();
      }
    

      async delete(prodId: string) {
        const result = await this.CategoryModel.deleteOne({ _id: prodId }).exec();
      }
    
}
