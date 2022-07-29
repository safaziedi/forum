import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateQuestionDto } from './dto/question.dto';
import { UpdateQuestionDto } from './dto/updatequestion.dto';
import { Question } from './question.schema';

@Injectable()
export class QuestionService {
    
  constructor(
    @InjectModel('Question') private QuestionModel: Model<Question>
  ) {}

      async create(createQuestionDto: CreateQuestionDto ): Promise<Question> {
        /*const idform = createCoursDto.formationId;
        const newCours = await this.CoursModel.create(createCoursDto);
        const result = await newCours.save();
    
        //update table cours dans formation
        const updatedFormation = await this.formationsService.findByIdAndUpdate(
          idform,
          newCours,
        );
        return newCours;*/
        //const qcmId = createQuestionDto.qcmId
        //const finalTestId = createQuestionDto.finalTestId

        const newquestion = await this.QuestionModel.create(createQuestionDto);
        const result = await newquestion.save()
        
        return newquestion;
      }


    async getAll(): Promise<Question[]> {
        return this.QuestionModel.find();
      }


      async update(question: UpdateQuestionDto) {
        const updateQuestion = new this.QuestionModel(question);
        return updateQuestion.save();
      }
    

      async delete(prodId: string) {
        const result = await this.QuestionModel.deleteOne({ _id: prodId }).exec();
      }
    
}
