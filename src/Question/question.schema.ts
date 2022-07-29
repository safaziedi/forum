import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose, { Document } from 'mongoose';
import { QCM } from 'src/QCMCours/qcm.schema';
import { TestFinalFormation } from 'src/TestFinal/testfinalformation.schema';


export type QuestionDocument = Question & Document;

@Schema()
export class Question {

  @Prop()
  question: string;

  @Prop()
  numeroquestion: number;

  @Prop()
  reponse: string;

  /*@ApiProperty({type :() => QCM})
  @Prop({type : mongoose.Schema.Types.ObjectId , ref : 'QCM' })
  qcmId : QCM

  @ApiProperty({type :() => TestFinalFormation})
  @Prop({type : mongoose.Schema.Types.ObjectId , ref : 'TestFinalFormation' })
  finalTestId : TestFinalFormation */


  @Prop({type: Date, default: Date.now})
  date: string;


}

export const QuestionSchema = SchemaFactory.createForClass(Question);