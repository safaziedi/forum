import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cours } from 'src/Cours/cours.schema';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UserDecorator } from 'src/users/user.decorator';
import { CreateFormationDto } from './dto/create-formation.dto';
import { UpdateFormationDto } from './dto/update-formation.dto';
import { Formation } from './formation.schema';
@Injectable()
export class FormationsService {
  constructor(
    @InjectModel('Formation') private FormationModel: Model<Formation>,
  ) {}

  async findByIdAndUpdate(idform: string, cours: Cours) {
    const updatedFormation = await this.FormationModel.findByIdAndUpdate(
      idform,
      { $push: { cours: cours } },
    ).exec();
    return updatedFormation;
  }

  async create(createFormationDto: CreateFormationDto): Promise<Formation> {
    return await (await this.FormationModel.create(createFormationDto)).save();
  }

  async getAll(): Promise<Formation[]> {
    return this.FormationModel.find().exec();
  }

  async update(formation: UpdateFormationDto) {
    const updateFormation = new this.FormationModel(formation);
    return updateFormation.save();
  }

  async delete(prodId: string) {
    const result = await this.FormationModel.deleteOne({ _id: prodId }).exec();
  }
}
