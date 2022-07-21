import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth.service';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt'){

    constructor(private authService: AuthService) {
        super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          ignoreExpiration: true, //ba3d :dev traja3ha false
          secretOrKey: 'super-secret-cat' ,
        });
      }
    
      async validate(payload: any) {

        return { userId: payload.sub, email: payload.email };
      }
}