import { IsIn, ValidateIf } from "class-validator";
import { UserRole } from "../user.enum";

export class CreateUserDto  {

    email: string;
    password: string;


    @ValidateIf(s => typeof s.status !== 'undefined') 
    @IsIn(Object.values(UserRole))
    role: UserRole

}

