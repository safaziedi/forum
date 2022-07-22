import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from 'src/posts/posts.module';
import { TestFinalFormation, TestFinalFormationSchema } from './testfinalformation.schema';
import { TestFinalFormationController } from './testfinalformation.controller';
import { TestFinalFormationService } from './testfinalformation.service';
import { FormationsModule } from 'src/Formations/formation.module';
import { FormationsService } from 'src/Formations/formation.service';
import { Formation } from 'src/Formations/formation.schema';

@Module({
  imports :[
    FormationsModule ,
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
