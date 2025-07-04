import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import { RolesService } from 'src/roles/roles.service';

@Injectable()
export class UsersService {
	constructor(
		@InjectModel(User) private userRepository: typeof User,
		private rolesService: RolesService
	) {}

	async create(dto: CreateUserDto) {
		try {
			const user = await this.userRepository.create(dto);
			const roleData = await this.rolesService.getRoleByValue('user');
			// const role = JSON.parse(roleData);

			await user.$set('roles', [roleData.toJSON().id_role]);

			return user;
		} catch (error) {
			return error;
		}
	}

	async getAll() {
		try {
			const users = await this.userRepository.findAll({ include: { all: true } });
			return users;
		} catch (error) {
			return error;
		}
	}
	// async getOne(id) {
	// 	try {
	// 		const user = await this.userRepository.findOne(id);
	// 		return user;
	// 	} catch (error) {
	// 		return error;
	// 	}
	// }
}
