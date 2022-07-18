import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UserDecorator } from 'src/users/user.decorator';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './comment.model';
@Injectable()
export class CommentsService {


    
  constructor(
    @InjectModel('Comment') private CommentModel: Model<Comment>,
  ) {}

    async create(createCommentDto: CreateCommentDto , user : CreateUserDto 
      //,idPost  : string
      ): Promise<Comment> {
        //verif if post exist
        //const verifpost =await  ;
      const createdComment = new this.CommentModel({ ...createCommentDto ,user});
        return createdComment.save();
      }


    async getAll(@UserDecorator() user): Promise<Comment[]> {
        return this.CommentModel.find({user}).exec();
      }


      async update(comment: UpdateCommentDto) {
        const updateComment = new this.CommentModel(comment);
        return updateComment.save();
      }
    

      async delete(prodId: string) {
        const result = await this.CommentModel.deleteOne({ _id: prodId }).exec();
      }
    
}
