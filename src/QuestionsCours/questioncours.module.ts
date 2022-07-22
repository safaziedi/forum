import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from 'src/posts/posts.module';
import { QestionsCours, QestionsCoursSchema } from './questioncours.schema';
import { QestionsCoursController } from './questioncours.controller';
import { QestionsCoursService } from './questioncours.service';
import { FormationsModule } from 'src/Formations/formation.module';
import { FormationsService } from 'src/Formations/formation.service';
import { Formation } from 'src/Formations/formation.schema';

@Module({
  imports :[
    FormationsModule ,
    MongooseModule.forFeature([
      {
        name : QestionsCours.name ,
        schema : QestionsCoursSchema ,
      }]
    )
    ,HttpModule 
  ],
  controllers: [QestionsCoursController],
  providers: [QestionsCoursService ],
  exports:[QestionsCoursService]
})
export class QestionsCoursModule {}
