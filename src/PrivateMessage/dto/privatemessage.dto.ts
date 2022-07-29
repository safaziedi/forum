import { ApiProperty } from "@nestjs/swagger";

export class CreatePrivateMessageDto  {
    @ApiProperty()
    contenue: string;

    @ApiProperty()
    formateurId : string;

    @ApiProperty()
    etudiantId : string;
}
