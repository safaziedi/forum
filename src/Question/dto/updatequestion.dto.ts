import { ApiProperty } from "@nestjs/swagger";

export class UpdateQuestionDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    question: string;
  
    @ApiProperty()
    numeroquestion: number;
  
    @ApiProperty()
    reponse: boolean;
  }