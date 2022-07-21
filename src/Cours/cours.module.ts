import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from 'src/posts/posts.module';
import { Cours, CoursSchema } from './cours.schema';
import { CoursController } from './cours.controller';
import { CoursService } from './cours.service';
import { FormationsModule } from 'src/Formations/formation.module';
import { FormationsService } from 'src/Formations/formation.service';
import { Formation } from 'src/Formations/formation.schema';

@Module({
  imports :[
    FormationsModule ,
    MongooseModule.forFeature([
      {
        name : Cours.name ,
        schema : CoursSchema ,
      }]
    )
    ,HttpModule 
  ],
  controllers: [CoursController],
  providers: [CoursService ],
  exports:[CoursService]
})
export class CoursModule {}
