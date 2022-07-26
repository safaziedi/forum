import { ApiProperty } from "@nestjs/swagger";

export class UpdateCoursDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    titre: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    formationId : string
  }