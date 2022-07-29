import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TestFinalFormation, TestFinalFormationSchema } from './testfinalformation.schema';
import { TestFinalFormationController } from './testfinalformation.controller';
import { TestFinalFormationService } from './testfinalformation.service';

@Module({
  imports :[
  
    MongooseModule.forFeature([
      {
        name : TestFinalFormation.name ,
        schema : TestFinalFormationSchema ,
      }]
    )
    ,HttpModule 
  ],
  controllers: [TestFinalFormationController],
  providers: [TestFinalFormationService ],
  exports:[TestFinalFormationService]
})
export class TestFinalFormationModule {}
