import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
  } from '@nestjs/common';
import { QCMService } from './qcm.service';
import { CreateQCMDto } from './dto/qcm.dto';

import { UpdateQCMDto } from './dto/updateqcm.dto';

import { ApiTags } from '@nestjs/swagger';
import { Question } from 'src/Question/question.schema';
import { AddQuestionDto } from './dto/addquestion-dto';
@ApiTags('QCM')
@Controller('qcm')
export class QCMController {
    constructor(private qcmService: QCMService) {}

    
    @Post()
    async create(@Body() qcm: CreateQCMDto) {
      return await this.qcmService.create(
        qcm
      )
    }
  
    // add question in QCM
    @Post('/addquestion')
    async addquestion(@Body() qcm: AddQuestionDto) { 
      return await this.qcmService.findByIdAndUpdate(qcm)
    }
    
    @Get()
    async getAll(
    ) {
      return await this.qcmService.getAll();
    }

    /*@Get('/verifQuestionExists')
    async verifQuestionExists(@Body() qcm: AddQuestionDto
    ) {
      const qcmm = this.qcmService.getQCMById(qcm.idqcm);
      const questions =(await qcmm).questions
      const question = qcm.question
      console.log("qcmdto" , qcm )
      console.log("qcm" , qcmm )
      console.log("questions: ", questions);
      console.log("question" ,question);
     // return await this.qcmService.verifQuestionExists(qcm)   
     }*/
  
    @Patch()
    async update(@Body() qcm: UpdateQCMDto) {
      return await this.qcmService.update(qcm);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string) {
      return await this.qcmService.delete(id);
    }
}
