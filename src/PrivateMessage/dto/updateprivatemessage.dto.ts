import { ApiProperty } from "@nestjs/swagger";

export class UpdatePrivateMessageDto {
    @ApiProperty()
    id: string;
    
    @ApiProperty()
    contenue: string;
  }