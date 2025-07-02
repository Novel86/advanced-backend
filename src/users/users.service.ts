import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
	constructor(@InjectModel(User) private userRepository: typeof User) {}

	async create(dto: CreateUserDto) {
		try {
			const user = await this.userRepository.create(dto);
			return user;
		} catch (error) {
			return error;
		}
	}

	async getAll() {
		try {
			const users = await this.userRepository.findAll();
			return users;
		} catch (error) {
			return error;
		}
	}
	async getOne(id) {
		try {
			const user = await this.userRepository.findOne(id);
			return user;
		} catch (error) {
			return error;
		}
	}
}
