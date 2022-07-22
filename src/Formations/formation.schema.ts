import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/users/user.schema';
import * as mongoose from 'mongoose';
import { Cours } from 'src/Cours/cours.schema';

export type FormationDocument = Formation & Document;

@Schema()
export class Formation {


  @Prop()
  description: string;

  @Prop({type : mongoose.Schema.Types.ObjectId , ref : 'Cours' })
  cours : Cours[]

  @Prop({type: Date, default: Date.now})

  date: string;
}

export const FormationSchema = SchemaFactory.createForClass(Formation);