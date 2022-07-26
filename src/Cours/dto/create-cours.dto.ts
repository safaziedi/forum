import { ApiProperty } from "@nestjs/swagger";
import { CreateUserDto } from "src/users/dto/create-user.dto";

export class CreateCoursDto  {
    @ApiProperty()
    titre: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    formationId : string
}
