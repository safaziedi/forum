import { ApiProperty } from "@nestjs/swagger";


export class CreateFormationDto  {
    @ApiProperty()
    titre: string;

    @ApiProperty()
    description: string;
    
    @ApiProperty()
    categoryId : string;
}
