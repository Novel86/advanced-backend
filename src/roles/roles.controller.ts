import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/createRole.dto';
import { Role } from './roles.model';
import { UpdateRoleDto } from './dto/updateRole.dto';

@ApiTags('Roles')
@Controller('api/roles')
export class RolesController {
	constructor(private roleService: RolesService) {}

	@ApiOperation({ summary: 'create role' })
	@ApiResponse({ status: 201, type: Role })
	@Post()
	create(@Body() dto: CreateRoleDto) {
		return this.roleService.create(dto);
	}

	//fix update function. value is necessary
	// @ApiOperation({ summary: 'update role' })
	// @ApiResponse({ status: 200, type: Role })
	// @Put('/:value')
	// updateByValue(@Param('value') value: string, @Body() dto: UpdateRoleDto) {
	// 	return this.roleService.updateByValue(value, dto);
	// }

	@ApiOperation({ summary: 'get role by value' })
	@ApiResponse({ status: 200, type: Role })
	@Get('/:value')
	getByValue(@Param('value') value: string) {
		return this.roleService.getRoleByValue(value);
	}
}
