import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UserDecorator } from 'src/users/user.decorator';
import { CreateTestFinalFormationDto } from './dto/testfinalformation.dto';
import { UpdateTestFinalFormationDto } from './dto/updatetestfinalformation.dto';
import { TestFinalFormation } from './testfinalformation.schema';
@Injectable()
export class TestFinalFormationService {


    
  constructor(
    @InjectModel('TestFinalFormation') private TestFinalFormationModel: Model<TestFinalFormation>
  ) {}

    async create(createTestFinalFormationDto: CreateTestFinalFormationDto 
      ): Promise<TestFinalFormation> {
        return await (await this.TestFinalFormationModel.create(createTestFinalFormationDto)).save();
      }


    async getAll(): Promise<TestFinalFormation[]> {
        return this.TestFinalFormationModel.find();
      }


      async getTestFinalById (testId: string): Promise<TestFinalFormation>
      {
        return await this.TestFinalFormationModel.findById(testId);
      }

      async update(TestFinalFormation: UpdateTestFinalFormationDto) {
        const updateTestFinalFormation = new this.TestFinalFormationModel(TestFinalFormation);
        return updateTestFinalFormation.save();
      }
    

      async delete(prodId: string) {
        const result = await this.TestFinalFormationModel.deleteOne({ _id: prodId }).exec();
      }
    
}
