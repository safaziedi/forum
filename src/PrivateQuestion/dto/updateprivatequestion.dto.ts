import { ApiProperty } from "@nestjs/swagger";

export class UpdatePrivateQuestionDto {
    @ApiProperty()
    id: string;
    
    @ApiProperty()
    contenue: string;
  }