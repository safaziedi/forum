import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from 'src/posts/posts.module';
import { CommentSchema } from './comment.model';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';

@Module({
  imports :[
    MongooseModule.forFeature([
      {
        name :'Comment' ,
        schema : CommentSchema ,
      }]
    ),HttpModule , PostsModule
  ],
  controllers: [CommentsController],
  providers: [CommentsService],
  exports:[CommentsService]
})
export class CommentsModule {}
