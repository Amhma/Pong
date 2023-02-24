import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from "@nestjs/common";
import { Request } from 'express';
import { jwtConstants} from "./constants";


type JwtPayload = {
	sub: number;
	login: string;
};

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
	Strategy,
	'jwt-refresh'
) {
	constructor() {
		super({
			usernameField: 'login',
			jwtFromRequest: ExtractJwt.fromExtractors([(request: Request) => {
                const data = request?.cookies["rT"];
                if(!data){
                    return null;
                }
                return data
            }]),
			secretOrKey: jwtConstants.refresh_secret,
			passReqToCallback: true,
			ignoreExpiration: false
		  });
	}

	validate(request: Request, payload: any) {
		const refreshToken = request?.cookies["rT"];
		return { ...payload, refreshToken };
	}
}
