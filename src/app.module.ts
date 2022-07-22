import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { FormationsModule } from './Formations/formation.module';
import { CoursModule } from './Cours/cours.module';
import { CommentsModule } from './comments/comments.module';
import { PrivateQuestionModule } from './PrivateQuestion/privatequestion.module';
import { TestFinalFormationModule } from './TestFinalFormation/testfinalformation.module';
import { ReponseQestionsCours } from './ReponsesQuestionsCours/reponsequestioncours.schema';
import { QestionsCoursModule } from './QuestionsCours/questioncours.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://dbUser:safaziadi07012001@cluster0.thbgv.mongodb.net/forum?retryWrites=true&w=majority'),
    UsersModule,
    PostsModule ,
    AuthModule,
    CoursModule,
    FormationsModule,
    CommentsModule,
    PrivateQuestionModule,
    TestFinalFormationModule,
    ReponseQestionsCours,
    QestionsCoursModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
