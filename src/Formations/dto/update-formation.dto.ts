import { ApiProperty } from "@nestjs/swagger";

export class UpdateFormationDto {

    @ApiProperty()
    id: string;

    @ApiProperty()
    titre: string;

    @ApiProperty()
    description: string;

}