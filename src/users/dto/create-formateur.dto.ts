import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsIn, IsNotEmpty, IsNumber, ValidateIf } from "class-validator";
import { UserRole } from "../user.enum";

export class CreateFormateurDto  {

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
    specialite : string;

}

