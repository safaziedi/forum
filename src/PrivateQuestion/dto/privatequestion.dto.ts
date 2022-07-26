import { ApiProperty } from "@nestjs/swagger";

export class CreatePrivateQuestionDto  {
    @ApiProperty()
    contenue: string;

    @ApiProperty()
    formateurId : string;

    @ApiProperty()
    etudiantId : string;
}
