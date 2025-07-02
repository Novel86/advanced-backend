import { Body, Controller, Get, Injectable, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';

@ApiTags('Users')
@Controller('api/users')
export class UsersController {
	constructor(private usersService: UsersService) {}

	@ApiOperation({ summary: 'create user' })
	@ApiResponse({ status: 201, type: User })
	@Post()
	create(@Body() userDto: CreateUserDto) {
		return this.usersService.create(userDto);
	}

	@ApiOperation({ summary: 'get all users' })
	@ApiResponse({ status: 200, type: [User] })
	@Get()
	getAll() {
		return this.usersService.getAll();
	}
}
