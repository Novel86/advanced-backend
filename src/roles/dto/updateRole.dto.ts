import { ApiProperty } from '@nestjs/swagger';

export class UpdateRoleDto {
	@ApiProperty({ example: 'administrator', description: 'role title' })
	readonly value?: string;

	@ApiProperty({ example: 'some text here', description: 'some text description here' })
	readonly description?: string;
}
