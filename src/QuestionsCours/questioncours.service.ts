import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UserDecorator } from 'src/users/user.decorator';
import { CreatePrivateQuestionDto } from './dto/questioncours.dto';
import { UpdatePrivateQuestionDto } from './dto/updatequestioncours.dto';
import { PrivateQuestion } from './questioncours.schema';
import { Formation } from 'src/Formations/formation.schema';
import { FormationsService } from 'src/Formations/formation.service';
@Injectable()
export class PrivateQuestionService {


    
  constructor(
    @InjectModel('PrivateQuestion') private PrivateQuestionModel: Model<PrivateQuestion>
  ) {}

    async create(createPrivateQuestionDto: CreatePrivateQuestionDto 
      ): Promise<PrivateQuestion> {
        return await (await this.PrivateQuestionModel.create(createPrivateQuestionDto)).save();
      }


    async getAll(): Promise<PrivateQuestion[]> {
        return this.PrivateQuestionModel.find();
      }


      async update(privateQuestion: UpdatePrivateQuestionDto) {
        const updatePrivateQuestion = new this.PrivateQuestionModel(privateQuestion);
        return updatePrivateQuestion.save();
      }
    

      async delete(prodId: string) {
        const result = await this.PrivateQuestionModel.deleteOne({ _id: prodId }).exec();
      }
    
}
