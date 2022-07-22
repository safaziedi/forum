import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UserDecorator } from 'src/users/user.decorator';
import { CreateReponseQestionsCoursDto } from './dto/reponsequestioncours.dto';
import { UpdateReponseQestionsCoursDto } from './dto/updatereponsequestioncours.dto';
import { ReponseQestionsCours } from './reponsequestioncours.schema';
import { Formation } from 'src/Formations/formation.schema';
import { FormationsService } from 'src/Formations/formation.service';
@Injectable()
export class ReponseQestionsCoursService {


    
  constructor(
    @InjectModel('ReponseQestionsCours') private ReponseQestionsCoursModel: Model<ReponseQestionsCours>
  ) {}

    async create(createReponseQestionsCoursDto: CreateReponseQestionsCoursDto 
      ): Promise<ReponseQestionsCours> {
        return await (await this.ReponseQestionsCoursModel.create(createReponseQestionsCoursDto)).save();
      }


    async getAll(): Promise<ReponseQestionsCours[]> {
        return this.ReponseQestionsCoursModel.find();
      }


      async update(reponsequestioncours: UpdateReponseQestionsCoursDto) {
        const updateReponseQestionsCours = new this.ReponseQestionsCoursModel(reponsequestioncours);
        return updateReponseQestionsCours.save();
      }
    

      async delete(prodId: string) {
        const result = await this.ReponseQestionsCoursModel.deleteOne({ _id: prodId }).exec();
      }
    
}
