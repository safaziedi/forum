import { ApiProperty } from "@nestjs/swagger";

export class UpdateQestionsCoursDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    contenue: string;

    @ApiProperty()
    reponse: string;
  }