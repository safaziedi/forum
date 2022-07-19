import { Injectable } from '@nestjs/common';
import { User } from './users/user.schema';

@Injectable()
export class AppService {
  getHello(
    user : User
    ){
    
    return user
  }
}