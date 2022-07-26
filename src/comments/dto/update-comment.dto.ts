import { ApiProperty } from "@nestjs/swagger";

export class UpdateCommentDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    description: string;

  }