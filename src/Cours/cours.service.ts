import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCoursDto } from './dto/create-cours.dto';
import { UpdateCoursDto } from './dto/update-cours.dto';
import { Cours } from './cours.schema';
import { FormationsService } from 'src/Formations/formation.service';

@Injectable()
export class CoursService {
  constructor(
    @InjectModel('Cours') private CoursModel: Model<Cours>,
    private formationsService: FormationsService,
  ) {}

  async create(createCoursDto: CreateCoursDto): Promise<Cours> {
    const idform = createCoursDto.formationId;
    const newCours = await this.CoursModel.create(createCoursDto);
    const result = await newCours.save();

    //update table cours dans formation
    const updatedFormation = await this.formationsService.findByIdAndUpdate(
      idform,
      newCours,
    );
    return result;
  }

  async getAll(): Promise<Cours[]> {
    return this.CoursModel.find().populate('formationId');
  }

  async update(cours: UpdateCoursDto) {
    const updateCours = new this.CoursModel(cours);
    return updateCours.save();
  }

  async delete(prodId: string) {
    const result = await this.CoursModel.deleteOne({ _id: prodId }).exec();
  }
}
