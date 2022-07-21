import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from 'src/posts/posts.module';
import { PrivateQuestion, PrivateQuestionSchema } from './privatequestion.schema';
import { PrivateQuestionController } from './privatequestion.controller';
import { PrivateQuestionService } from './privatequestion.service';
import { FormationsModule } from 'src/Formations/formation.module';
import { FormationsService } from 'src/Formations/formation.service';
import { Formation } from 'src/Formations/formation.schema';

@Module({
  imports :[
    FormationsModule ,
    MongooseModule.forFeature([
      {
        name : PrivateQuestion.name ,
        schema : PrivateQuestionSchema ,
      }]
    )
    ,HttpModule 
  ],
  controllers: [PrivateQuestionController],
  providers: [PrivateQuestionService ],
  exports:[PrivateQuestionService]
})
export class PrivateQuestionModule {}