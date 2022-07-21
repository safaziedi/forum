import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UserDecorator } from 'src/users/user.decorator';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './comment.schema';
@Injectable()
export class CommentsService {


    
  constructor(
    @InjectModel('Comment') private CommentModel: Model<Comment>,
  ) {}

    async create(createCommentDto: CreateCommentDto 
      ): Promise<any> {


      }


    async getAll(): Promise<Comment[]> {
        return this.CommentModel.find().exec();
      }


      async update(comment: UpdateCommentDto) {
        const updateComment = new this.CommentModel(comment);
        return updateComment.save();
      }
    

      async delete(prodId: string) {
        const result = await this.CommentModel.deleteOne({ _id: prodId }).exec();
      }
    
}
