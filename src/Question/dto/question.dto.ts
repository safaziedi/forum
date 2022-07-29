import { ApiProperty } from "@nestjs/swagger";

export class CreateQuestionDto  {
    @ApiProperty()
    question: string;
  
    @ApiProperty()
    numeroquestion: number;
  
    @ApiProperty()
    reponse: boolean;

    
    /*   @ApiProperty()
    qcmId : string;

    @ApiProperty()
    finalTestId : string;
    */
}
