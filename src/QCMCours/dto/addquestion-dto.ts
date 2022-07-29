import { ApiProperty } from "@nestjs/swagger";
import { Question } from "src/Question/question.schema";

export class AddQuestionDto  {
    

    @ApiProperty()
    idqcm: string;
    @ApiProperty()
    question: Question
}
