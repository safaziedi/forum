import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UserDecorator } from 'src/users/user.decorator';
import { CreateQestionsCoursDto } from './dto/questioncours.dto';
import { UpdateQestionsCoursDto } from './dto/updatequestioncours.dto';
import { QestionsCours } from './questioncours.schema';
import { Formation } from 'src/Formations/formation.schema';
import { FormationsService } from 'src/Formations/formation.service';
@Injectable()
export class QestionsCoursService {


    
  constructor(
    @InjectModel('QestionsCours') private QestionsCoursModel: Model<QestionsCours>
  ) {}

    async create(createQestionsCoursDto: CreateQestionsCoursDto 
      ): Promise<QestionsCours> {
        return await (await this.QestionsCoursModel.create(createQestionsCoursDto)).save();
      }


    async getAll(): Promise<QestionsCours[]> {
        return this.QestionsCoursModel.find();
      }


      async update(questioncours: UpdateQestionsCoursDto) {
        const updateQestionsCours = new this.QestionsCoursModel(questioncours);
        return updateQestionsCours.save();
      }
    

      async delete(prodId: string) {
        const result = await this.QestionsCoursModel.deleteOne({ _id: prodId }).exec();
      }
    
}
