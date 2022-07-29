import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UserDecorator } from 'src/users/user.decorator';
import { User } from 'src/users/user.schema';
import { UsersService } from 'src/users/users.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './post.schema';
@Injectable()
export class PostsService {


    
  constructor(
    @InjectModel('Post') private PostModel: Model<Post>,
    private usersService: UsersService,
  ) {}


      async create(createPostDto: CreatePostDto , author: any): Promise<any> {

        const newPost = new this.PostModel({
          contents:createPostDto.contents ,
          author:author.userId
        })
        const result = await newPost.save()

        //post = cours , user = formation
        //update array posts dans table user bech n9oul li post heke mte3ou 
        const updatedUserPosts = await this.usersService.findByIdAndUpdate(
          author.userId,
          newPost,
        );
        
        return result
      }


/*async create(createCategoryDto: CreatePostDto): Promise<Post> {
  const newCategory = await this.PostModel.create(createCategoryDto);
  const result = await newCategory.save();
  return result;
}*/

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
