import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/users/user.schema';
import * as mongoose from 'mongoose';
import { Formation } from 'src/Formations/formation.schema';
import { ApiProperty } from '@nestjs/swagger';

export type CoursDocument = Cours & Document;

@Schema()
export class Cours {

  @ApiProperty()
  @Prop()
  titre: string;

  @ApiProperty()
  @Prop()
  description: string;

  @ApiProperty({type :() => Formation})
  @Prop({type : mongoose.Schema.Types.ObjectId , ref : 'Formation' })
  formationId : Formation
  
  @Prop({type: Date, default: Date.now})
  date: string;
}

export const CoursSchema = SchemaFactory.createForClass(Cours);