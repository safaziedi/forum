import { ApiProperty } from '@nestjs/swagger';

export class UpdateTestFinalFormationDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  question: string;

  @ApiProperty()
  numeroquestion: number;

  @ApiProperty()
  reponse: boolean;
}
