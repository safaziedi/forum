import { CreateUserDto } from "src/users/dto/create-user.dto";

export class CreateCommentDto  {

    user : CreateUserDto  ;

    description: string;
}
