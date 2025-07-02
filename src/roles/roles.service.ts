import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/createRole.dto';
import { Role } from './roles.model';
import { InjectModel } from '@nestjs/sequelize';
import { UpdateRoleDto } from './dto/updateRole.dto';

@Injectable()
export class RolesService {
	constructor(@InjectModel(Role) private roleRepository: typeof Role) {}

	async create(dto: CreateRoleDto) {
		try {
			const createdRole = await this.roleRepository.create(dto);
			return createdRole;
		} catch (error) {
			return error;
		}
	}

	async getRoleByValue(value: string) {
		try {
			const role = await this.roleRepository.findOne({ where: { value } });
			return role;
		} catch (error) {
			return error;
		}
	}

	// async updateByValue(value: string, body: UpdateRoleDto) {
	// 	try {
	// 		const role = await this.roleRepository.findOne({ where: { value } });

	// 		role?.set({
	// 			value: body.value ? body.value : role.value,
	// 			description: body.description ? body.description : role.description,
	// 		});

	// 		await role?.save();
	// 		return role;
	// 	} catch (error) {
	// 		return error;
	// 	}
	// }
}
