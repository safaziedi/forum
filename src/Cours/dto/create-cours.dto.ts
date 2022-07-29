import { ApiProperty } from "@nestjs/swagger";

export class CreateCoursDto  {
    @ApiProperty()
    titre: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    formationId : string;
}
