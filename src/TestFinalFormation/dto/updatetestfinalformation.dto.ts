import { ApiProperty } from '@nestjs/swagger';

export class UpdateTestFinalFormationDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  contenue: string;

  @ApiProperty()
  reponse: string;
}
