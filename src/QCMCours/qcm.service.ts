import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateQCMDto } from './dto/qcm.dto';
import { UpdateQCMDto } from './dto/updateqcm.dto';
import { QCM } from './qcm.schema';
import { AddQuestionDto } from './dto/addquestion-dto';

@Injectable()
export class QCMService {
  constructor(@InjectModel('QCM') private QCMModel: Model<QCM>) {}

  async create(createQCMDto: CreateQCMDto): Promise<QCM> {
    return await (await this.QCMModel.create(createQCMDto)).save();
  }

  //add question in QCM
 async findByIdAndUpdate(qcm : AddQuestionDto) {
    console.log(qcm)

    const updatedqcm = await this.QCMModel.findByIdAndUpdate(qcm.idqcm, {
      $push: { questions: qcm.question },
    } , {new : true}).exec();
    console.log(updatedqcm)
    return updatedqcm;
  }


  /*async getQCMById(prodId: string) {
    const user = this.QCMModel.findById({ _id: prodId }).exec();
    return user;
  }

  async verifQuestionExists(qcm : AddQuestionDto) {

    const qcmm = this.getQCMById(qcm.idqcm);
    const questions =(await qcmm).questions 
    const question = qcm.question
    console.log("questions: ", questions);
    console.log("question" ,question);
    /*if ( question == questions)
    {
      //throw new HttpException('Question already exists ', HttpStatus.BAD_REQUEST);
      return true ;
    }
    return false ;
  }*/ 

  async getAll(): Promise<QCM[]> {
    return this.QCMModel.find();
  }

  async update(questioncours: UpdateQCMDto) {
    const updateQCM = new this.QCMModel(questioncours);
    return updateQCM.save();
  }

  async delete(prodId: string) {
    const result = await this.QCMModel.deleteOne({ _id: prodId }).exec();
  }
}
