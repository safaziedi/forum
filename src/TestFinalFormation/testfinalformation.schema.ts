import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type TestFinalFormationDocument = TestFinalFormation & Document;

@Schema()
export class TestFinalFormation {

  @Prop()
  contenue: string;

  @Prop()
  reponse: string;

  @Prop({type: Date, default: Date.now})
  date: string;
}

export const TestFinalFormationSchema = SchemaFactory.createForClass(TestFinalFormation);