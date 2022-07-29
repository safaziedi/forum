import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Formation } from 'src/Formations/formation.schema';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {

  @Prop()
  title: string;

  @Prop()
  description: string;
  
  @Prop({type : mongoose.Schema.Types.ObjectId , ref : 'Formation' })
  formations : Formation[]

  @Prop({type: Date, default: Date.now})
  date: Date;
}

export const CategorySchema = SchemaFactory.createForClass(Category);