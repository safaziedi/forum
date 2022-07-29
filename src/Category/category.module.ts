import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema } from './category.schema';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';


@Module({
  imports :[
    MongooseModule.forFeature([
      {
        name : Category.name ,
        schema : CategorySchema ,
      }]
    )
    ,HttpModule 
  ],
  controllers: [CategoryController],
  providers: [CategoryService ],
  exports:[CategoryService]
})
export class CategoryModule {}
