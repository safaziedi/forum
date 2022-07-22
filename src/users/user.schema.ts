import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Post } from 'src/posts/post.schema';
import { UserRole } from './user.enum';

export type UserDocument = User & Document;

@Schema()
export class User {

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  role: UserRole

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Post' })
  posts: Post[];
}

export const UserSchema = SchemaFactory.createForClass(User);