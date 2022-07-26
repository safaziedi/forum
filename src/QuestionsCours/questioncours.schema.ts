import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type QestionsCoursDocument = QestionsCours & Document;

@Schema()
export class QestionsCours {

  @Prop()
  question: string;

  @Prop()
  reponse: string;


}

export const QestionsCoursSchema = SchemaFactory.createForClass(QestionsCours);