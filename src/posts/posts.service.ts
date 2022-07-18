import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UserDecorator } from 'src/users/user.decorator';
import { User } from 'src/users/user.model';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './post.model';
@Injectable()
export class PostsService {


    
  constructor(
    @InjectModel('Post') private PostModel: Model<Post>,
  ) {}

    async create(createPostDto: CreatePostDto , @UserDecorator() author): Promise<Post> {
        const createdPost = new this.PostModel({ ...createPostDto ,author} )
        console.log(createdPost)
        
        return createdPost;
      }


    async getAll(@UserDecorator() user): Promise<Post[]> {
      const a = user.sub
      console.log(a)
        return this.PostModel.find({a}).exec();
      }


      async update(post: UpdatePostDto) {
        const updatePost = new this.PostModel(post);
        return updatePost.save();
      }
    
      async findpostbyid(prodId: string) {
        const result = await this.PostModel.findOne({ _id: prodId }).exec();
      }

      async delete(prodId: string) {
        const result = await this.PostModel.deleteOne({ _id: prodId }).exec();
      }
    
}