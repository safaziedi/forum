import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Formation, FormationSchema } from './formation.schema';
import { FormationsController } from './formation.controller';
import { FormationsService } from './formation.service';
import { CategoryModule } from 'src/Category/category.module';
import { TestFinalFormationModule } from 'src/TestFinal/testfinalformation.module';

@Module({
  imports :[
    CategoryModule , 
    TestFinalFormationModule , 
    MongooseModule.forFeature([
      {
        name : Formation.name  ,
        schema : FormationSchema ,
      }]
    ),HttpModule 
  ],
  controllers: [FormationsController],
  providers: [FormationsService],
  exports:[FormationsService ]
})
export class FormationsModule {}
