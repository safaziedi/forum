import { ApiProperty } from "@nestjs/swagger";
import { CreateUserDto } from "src/users/dto/create-user.dto";

export class CreateCategoryDto  {
    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;
}
