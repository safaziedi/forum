import mongoose, { Schema} from 'mongoose';
import { User } from 'src/users/user.model';


export const PostSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref:"User"},
  description: { type: String},
 /* timestamps: {
    createdAt: 'created_at', 
    updatedAt: 'updated_at'
  }*/
});

export interface Post extends mongoose.Document {
 // _id: string;
  author : User;
  description: string;

 /* timestamps: {
    createdAt: 'created_at', 
    updatedAt: 'updated_at'
  }*/
}