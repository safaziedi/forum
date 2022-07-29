import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from 'src/posts/post.schema';
import { CreateAdminDto } from './dto/create-admin.dto';
import { CreateEtudiantDto } from './dto/create-etudiant.dto';
import { CreateFormateurDto } from './dto/create-formateur.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private UserModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email, password } = createUserDto;

    // check if the user exists in the db
    const userInDb = await this.findbyemail(email);
    if (userInDb) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const createdUser = new this.UserModel(createUserDto);
    return createdUser.save();
  }

  async createAdmin (createAdminDto: CreateAdminDto): Promise<User> {
    const { email } = createAdminDto;

    // check if the user exists in the db
    const userInDb = await this.findbyemail(email);
    if (userInDb) {
      throw new HttpException('Cannot create more than one Admin', HttpStatus.BAD_REQUEST);
    }


    const createdUser = new this.UserModel(createAdminDto);
    return createdUser.save();
  }

  async createFormateur (createFormateur: CreateFormateurDto): Promise<User> {
    const { email } = createFormateur;

    // check if the user exists in the db
    const userInDb = await this.findbyemail(email);
    if (userInDb) {
      throw new HttpException('Formateur exist', HttpStatus.BAD_REQUEST);
    }
    const createdUser = new this.UserModel(createFormateur);
    return createdUser.save();
  }

  async createEtudiant (createEtudiant: CreateEtudiantDto): Promise<User> {
    const { email } = createEtudiant;

    // check if the user exists in the db
    const userInDb = await this.findbyemail(email);
    if (userInDb) {
      throw new HttpException('Etudiant exist', HttpStatus.BAD_REQUEST);
    }
    const createdUser = new this.UserModel(createEtudiant);
    return createdUser.save();
  }


  async findByIdAndUpdate(userId: string, post: Post) {
    const updatedUserPosts = await this.UserModel.findByIdAndUpdate(
      userId,
      { $push: { posts: post } },
    ).exec();
    return updatedUserPosts;
  }


  async getUserById(prodId: string) {
    const user = await this.UserModel.findById({ _id: prodId }).exec();
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }

  async findbyemail(email: string) {
    const user = await this.UserModel.findOne({ email: email }).exec();
    return user;
  }

  async getAll(): Promise<User[]> {
    return this.UserModel.find().exec();
  }

  async updateProfile(id: string,UpdateUserDto: UpdateUserDto) {
    /*
        const updatedUserPosts = await this.UserModel.findByIdAndUpdate(
      userId,
      { $push: { posts: post } },
    ).exec();
    return updatedUserPosts;*/ 
    const updateUser = await  this.UserModel.findByIdAndUpdate(
      { _id :id},
      UpdateUserDto,
      {new: true})
      .populate('posts');

      if (!updateUser)
      {
        throw new NotFoundException();
      }
    return updateUser.save();
  }

  async delete(prodId: string) {
    const result = await this.UserModel.deleteOne({ _id: prodId }).exec();
  }
}
