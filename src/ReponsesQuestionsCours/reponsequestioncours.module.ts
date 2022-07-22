import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from 'src/posts/posts.module';
import { ReponseQestionsCours, ReponseQestionsCoursSchema } from './reponsequestioncours.schema';
import { ReponseQestionsCoursController } from './reponsequestioncours.controller';
import { ReponseQestionsCoursService } from './reponsequestioncours.service';
import { FormationsModule } from 'src/Formations/formation.module';
import { FormationsService } from 'src/Formations/formation.service';
import { Formation } from 'src/Formations/formation.schema';

@Module({
  imports :[
    FormationsModule ,
    MongooseModule.forFeature([
      {
        name : ReponseQestionsCours.name ,
        schema : ReponseQestionsCoursSchema ,
      }]
    )
    ,HttpModule 
  ],
  controllers: [ReponseQestionsCoursController],
  providers: [ReponseQestionsCoursService ],
  exports:[ReponseQestionsCoursService]
})
export class ReponseQestionsCoursModule {}
