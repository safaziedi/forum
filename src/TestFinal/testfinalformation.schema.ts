import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose, { Document } from 'mongoose';
import { Formation } from 'src/Formations/formation.schema';
import { Question } from 'src/Question/question.schema';


export type TestFinalFormationDocument = TestFinalFormation & Document;

@Schema()
export class TestFinalFormation {

  @Prop({type : mongoose.Schema.Types.ObjectId , ref : 'Question' })
  questions : Question[]

  @ApiProperty({type :() => Formation})
  @Prop({type : mongoose.Schema.Types.ObjectId , ref : 'Formation' })
  formationId : Formation

  @Prop({type: Date, default: Date.now})
  date: string;
}

export const TestFinalFormationSchema = SchemaFactory.createForClass(TestFinalFormation);