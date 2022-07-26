import { ApiProperty } from "@nestjs/swagger";

export class CreateQestionsCoursDto  {
    @ApiProperty()
    contenue: string;

    @ApiProperty()
    reponse: string;

}
