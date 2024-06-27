import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthGuard } from "./auth.guard";
import { ApiBearerAuth, ApiBody, ApiTags } from "@nestjs/swagger";
import { LoginDto } from "./dto/LoginDto";

@ApiTags("auth")
@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService) {}
    @HttpCode(HttpStatus.OK)
    @Post("login")
    @ApiBody({ type: LoginDto })
    signIn(@Body() signInDto: LoginDto) {
        return this.authService.signIn(signInDto.email, signInDto.password);
    }

    @UseGuards(AuthGuard)
    @ApiBearerAuth()
    @Get("me")
    getProfile(@Request() req) {
        return req.user;
    }
}
