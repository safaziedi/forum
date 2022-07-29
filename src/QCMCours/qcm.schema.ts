import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Question } from 'src/Question/question.schema';


export type QCMDocument = QCM & Document;

@Schema()
export class QCM {

  @Prop({type : mongoose.Schema.Types.ObjectId , ref : 'Question' })
  questions : Question[]

  @Prop({type: Date, default: Date.now})
  date: string;
}

export const QCMSchema = SchemaFactory.createForClass(QCM);