import mongoose, { Date, Schema} from 'mongoose';
import { CreateCommentDto } from 'src/comments/dto/create-comment.dto';


export const CommentSchema = new Schema({
  commentId: { type: Schema.Types.ObjectId, ref:"Post"},
  description: { type: String},
  timestamps: {
    createdAt: 'created_at', 
    updatedAt: 'updated_at'
  }
});

export interface Comment extends mongoose.Document {
  _id: string;
  comment : CreateCommentDto;
  description: string;
  timestamps: {
    createdAt: 'created_at', 
    updatedAt: 'updated_at'
  }
}