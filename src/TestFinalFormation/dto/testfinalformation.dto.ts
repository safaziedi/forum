import { ApiProperty } from "@nestjs/swagger";

export class CreateTestFinalFormationDto  {
    @ApiProperty()
    contenue: string;

    @ApiProperty()
    reponse: string;
}
