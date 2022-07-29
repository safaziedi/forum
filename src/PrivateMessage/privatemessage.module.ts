import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PrivateMessage, PrivateMessageSchema } from './privatemessage.schema';
import { PrivateMessageController } from './privatemessage.controller';
import { PrivateMessageService } from './privatemessage.service';


@Module({
  imports :[
    MongooseModule.forFeature([
      {
        name : PrivateMessage.name ,
        schema : PrivateMessageSchema ,
      }]
    )
    ,HttpModule 
  ],
  controllers: [PrivateMessageController],
  providers: [PrivateMessageService ],
  exports:[PrivateMessageService]
})
export class PrivateMessageModule {}
