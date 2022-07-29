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
import { PrivateMessageModule} from './PrivateMessage/privatemessage.module';
import { TestFinalFormationModule } from './TestFinal/testfinalformation.module';
import { QCMModule} from './QCMCours/qcm.module';
import { CategoryModule } from './Category/category.module';
import { QuestionModule } from './Question/question.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://dbUser:safaziadi07012001@cluster0.thbgv.mongodb.net/Pedemy?retryWrites=true&w=majority'),
    UsersModule,
    PostsModule ,
    AuthModule,
    CoursModule,
    FormationsModule,
    CommentsModule,
    TestFinalFormationModule,
    CategoryModule,
    QCMModule,
    PrivateMessageModule ,
    QuestionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
