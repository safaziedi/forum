import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/users/user.schema';
import * as mongoose from 'mongoose';

export type PostDocument = Post & Document;

@Schema()
export class Post {
    @Prop()
    contents: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: () => User })
    author: User;



  
}

export const PostSchema = SchemaFactory.createForClass(Post);