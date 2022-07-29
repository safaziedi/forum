import { ApiProperty } from "@nestjs/swagger";

export class CreateTestFinalFormationDto  {
    @ApiProperty()
    //de type question lezm na3mlha ba3d
    question: string;
  
    @ApiProperty()
    numeroquestion: number;
  
    @ApiProperty()
    reponse: boolean;

    @ApiProperty()
    formationId : string;
}