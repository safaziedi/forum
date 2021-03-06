import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsIn, IsNotEmpty, IsNumber, ValidateIf } from "class-validator";
import { UserRole } from "src/users/user.enum";

export class authDto{

  
    @ApiProperty()
    nom: string;
  
    @ApiProperty()
    prenom:string;
    
    @ApiProperty()
    @IsNotEmpty()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    password: string;


    @ApiProperty({
        enum: UserRole,
        isArray: true,
        example: [UserRole.ADMIN , UserRole.ETUDIANT , UserRole.FORMATEUR , UserRole.VISITEUR],
    })

    @ValidateIf(s => typeof s.status !== 'undefined') 
    @IsIn(Object.values(UserRole))
    role: UserRole ;

    @ApiProperty()
    note : number;

    @ApiProperty()
    testPassed : boolean ;

    @ApiProperty()
    specialite : string;
}