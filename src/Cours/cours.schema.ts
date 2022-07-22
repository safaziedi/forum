import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/users/user.schema';
import * as mongoose from 'mongoose';
import { Formation } from 'src/Formations/formation.schema';

export type CoursDocument = Cours & Document;

@Schema()
export class Cours {

  @Prop()
  description: string;

  @Prop({type : mongoose.Schema.Types.ObjectId , ref : 'Formation' })
  formationId : Formation
  
  @Prop({type: Date, default: Date.now})
  date: string;
}

export const CoursSchema = SchemaFactory.createForClass(Cours);