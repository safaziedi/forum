import { ApiProperty } from "@nestjs/swagger";

export class UpdateQCMDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    question: string;
  }