import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { authDto } from './dto';


@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService : JwtService
        ) {}
    async signinLocal(dto: authDto){
        const user = await this.usersService.findbyemail(dto.email)

        if (!user) {
            throw new UnauthorizedException ("credentials incorecct")
          }

        if (user.password !== dto.password) {
            throw new UnauthorizedException ("credentials incorecct")
        }
        // we can return user but when we return a json web token "jwt.io" , more sec!
        //return user
        return this.signUser(user.id , user.email , 'user')
    }

    async signUser(userId : string , email : string ,type : string ){

        return this.jwtService.sign(
            {
                sub : userId ,
                email , 
                type : type ,
            }
        )
    }

    async signupLocal(createUserDto: authDto){
        if (createUserDto.role == 'ADMIN')
        {
          const {email , password , role} =createUserDto
          const createAdminDto = {email , password , role}
          
          return await this.usersService.createAdmin(createAdminDto);
        }
    
        if (createUserDto.role == 'ETUDIANT')
        {
          const {nom ,prenom,email , password , role ,note ,testPassed } =createUserDto
          const createEtudiantDto = {nom ,prenom,email , password , role ,note ,testPassed}
          
          return await this.usersService.createEtudiant(createEtudiantDto);
        }
    
        if (createUserDto.role == 'FORMATEUR')
        {
          const {nom ,prenom,email , password , role ,specialite} =createUserDto
          const createFormateurDto = {nom ,prenom,email , password , role , specialite }
          
          return await this.usersService.createFormateur(createFormateurDto);
        }
    
        
        return await this.usersService.create(createUserDto);
    }


}
