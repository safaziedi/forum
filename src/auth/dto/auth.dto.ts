import { ApiProperty } from "@nestjs/swagger";
import { IsIn, IsNotEmpty, ValidateIf } from "class-validator";
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
        example: [UserRole.ADMIN , UserRole.ETUDIANT , UserRole.FORMATEUR , UserRole.VISITEUR],
    })

    @ValidateIf(s => typeof s.status !== 'undefined') 
    @IsIn(Object.values(UserRole))
    role: UserRole

    @ApiProperty()
    note : number;
}