import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/users/user.schema';
import * as mongoose from 'mongoose';
import { Cours } from 'src/Cours/cours.schema';

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {


  @Prop()
  contenue: string;

  @Prop({type: Date, default: Date.now})
  date: string;

  @Prop({type : mongoose.Schema.Types.ObjectId , ref : 'Cours' })
  coursId : Cours
}

export const CommentSchema = SchemaFactory.createForClass(Comment);