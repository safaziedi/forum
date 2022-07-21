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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
