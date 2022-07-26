import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/users/user.schema';
import * as mongoose from 'mongoose';
import { Formation } from 'src/Formations/formation.schema';

export type PrivateQuestionDocument = PrivateQuestion & Document;

@Schema()
export class PrivateQuestion {

  @Prop()
  contenue: string;
  
  @Prop()
  formateurId : string;
  @Prop()
  etudiantId : string;

  @Prop({type: Date, default: Date.now})
  date: string;
}

export const PrivateQuestionSchema = SchemaFactory.createForClass(PrivateQuestion);