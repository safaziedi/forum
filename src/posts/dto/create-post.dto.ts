import { ApiProperty } from "@nestjs/swagger";


export class CreatePostDto  {
    @ApiProperty()
    contents: string;


}
