import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePrivateMessageDto } from './dto/privatemessage.dto';
import { UpdatePrivateMessageDto } from './dto/updateprivatemessage.dto';
import { PrivateMessage } from './privatemessage.schema';

@Injectable()
export class PrivateMessageService {
    
  constructor(
    @InjectModel('PrivateMessage') private PrivateMessageModel: Model<PrivateMessage>
  ) {}

    async create(createPrivateMessageDto: CreatePrivateMessageDto 
      ): Promise<PrivateMessage> {
        return await (await this.PrivateMessageModel.create(createPrivateMessageDto)).save();
      }


    async getAll(): Promise<PrivateMessage[]> {
        return this.PrivateMessageModel.find();
      }


      async update(privateQuestion: UpdatePrivateMessageDto) {
        const updatePrivateMessage = new this.PrivateMessageModel(privateQuestion);
        return updatePrivateMessage.save();
      }
    

      async delete(prodId: string) {
        const result = await this.PrivateMessageModel.deleteOne({ _id: prodId }).exec();
      }
    
}
