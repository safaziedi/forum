import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/users/user.schema';
import * as mongoose from 'mongoose';

export type PostDocument = Post & Document;

@Schema()
export class Post {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    author: User;

  @Prop()
  description: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);