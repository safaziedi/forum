import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Post } from 'src/posts/post.schema';
import { UserRole } from './user.enum';
import { ApiProperty } from '@nestjs/swagger';

export type UserDocument = User & Document;

@Schema()
export class User {

  @ApiProperty()
  @Prop({
    match: /^\S+@\S+\.\S+$/,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  })
  email: string;

  @ApiProperty()
  @Prop(
    {
      required: true ,
      minlength: 6,
      maxlength: 128,
    })
  password: string;

  @ApiProperty()
  @Prop()
  nom: string;

  @ApiProperty()
  @Prop()
  prenom:string;

  @ApiProperty()
  @Prop({type: Date, default: Date.now})
  datelogin: string;

  @ApiProperty()
  @Prop()
  role: UserRole

  @ApiProperty()
  @Prop()
  note : number;

  @ApiProperty()
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Post' })
  posts: Post[];
}

export const UserSchema = SchemaFactory.createForClass(User);