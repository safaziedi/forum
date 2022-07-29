import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Question, QuestionSchema } from './question.schema';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';

@Module({
  imports :[
    MongooseModule.forFeature([
      {
        name : Question.name ,
        schema : QuestionSchema ,
      }]
    )
    ,HttpModule 
  ],
  controllers: [QuestionController],
  providers: [QuestionService ],
  exports:[QuestionService]
})
export class QuestionModule {}
