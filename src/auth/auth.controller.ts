import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
	constructor(private aythService: AuthService) {}

	@Post('/login')
	login(@Body() userDto: CreateUserDto) {}

	@Post('/registration')
	registration(@Body() userDto: CreateUserDto) {}
}
