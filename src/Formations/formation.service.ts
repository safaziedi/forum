import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CategoryService } from 'src/Category/category.service';
import { Cours } from 'src/Cours/cours.schema';
import { TestFinalFormationService } from 'src/TestFinal/testfinalformation.service';
import { CreateFormationDto } from './dto/create-formation.dto';
import { UpdateFormationDto } from './dto/update-formation.dto';
import { Formation } from './formation.schema';


@Injectable()
export class FormationsService {
  constructor(
    @InjectModel('Formation') private FormationModel: Model<Formation>,
    private categoryService: CategoryService,
    private testFinalService : TestFinalFormationService
  ) {}


  async create(createFormationDto: CreateFormationDto): Promise<Formation> {
    const idCategory = createFormationDto.categoryId;
    const newFormation = await this.FormationModel.create(createFormationDto);
    const result = await newFormation.save();

    //update table cours dans formation
    const updatedFormation = await this.categoryService.findByIdAndUpdate(
      idCategory,
      newFormation,
    );
    return newFormation;
  }


  async findByIdAndUpdate(idform: string, cours: Cours) {
    const updatedFormation = await this.FormationModel.findByIdAndUpdate(
      idform,
      { $push: { cours: cours } },
    ).exec();
    return updatedFormation;
  }

  async getTestFinalById (testId: string){
    return await this.testFinalService.getTestFinalById (testId)
   }

  async getAll(): Promise<Formation[]> {
    return this.FormationModel.find().populate('categoryId');;
  }

  async update(formation: UpdateFormationDto) {
    const updateFormation = new this.FormationModel(formation);
    return updateFormation.save();
  }

  async delete(prodId: string) {
    const result = await this.FormationModel.deleteOne({ _id: prodId }).exec();
  }
}
