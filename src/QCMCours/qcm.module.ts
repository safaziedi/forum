import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QCM, QCMSchema } from './qcm.schema';
import { QCMController } from './qcm.controller';
import { QCMService } from './qcm.service';

@Module({
  imports :[
    MongooseModule.forFeature([
      {
        name : QCM.name ,
        schema : QCMSchema ,
      }]
    )
    ,HttpModule 
  ],
  controllers: [QCMController],
  providers: [QCMService ],
  exports:[QCMService]
})
export class QCMModule {}
