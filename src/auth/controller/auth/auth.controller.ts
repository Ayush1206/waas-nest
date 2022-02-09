import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { signUpDto } from 'src/auth/DTO/auth.dto';
import { UserService } from 'src/auth/service/user/user.service';

@Controller('auth')
export class AuthController {
    constructor(
        private userService: UserService,
    ) { }

    @Post('signUp')
    @UsePipes(ValidationPipe)
    signUpUser(
        @Body() user: signUpDto
    ) {
        this.userService.signUp(user);
    }

    @Get('allUsers')
    getUser()
    {}
}
