import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from 'src/posts/posts.module';
import { Formation, FormationSchema } from './formation.schema';
import { FormationsController } from './formation.controller';
import { FormationsService } from './formation.service';
import { CoursModule } from 'src/Cours/cours.module';

@Module({
  imports :[
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
