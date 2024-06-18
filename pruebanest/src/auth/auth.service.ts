import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { stringToSha1 } from "./crypto.utils";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    async signIn(username: string, pass: string): Promise<any> {
        const user = await this.usersService.getByEmail(username);
        const hashedPass = stringToSha1(pass);
        if (user?.password !== hashedPass) {
            throw new UnauthorizedException();
        }
        const payload = { sub: user.id, username: user.email };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}
