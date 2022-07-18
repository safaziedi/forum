import { Prop } from '@nestjs/mongoose';
import { Schema, Document } from 'mongoose';
import { Post, PostSchema } from 'src/posts/post.model';

export const UserSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  posts: { type: Schema.Types.ObjectId, ref:"Post"},
});

export interface User extends Document {
  _id: string;
  email: string;
  password: string;
  posts : Post[];
}



