import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserDto {
    @ApiProperty()
    nom: string;
  
    @ApiProperty()
    prenom:string;
    
    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;


    @ApiProperty()
    note : number;

    @ApiProperty()
    testPassed : boolean ;

    @ApiProperty()
    specialite : string;

  }