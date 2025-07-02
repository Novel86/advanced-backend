import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
	@ApiProperty({ example: 'example@ml.ru', description: 'user registration email' })
	readonly email: string;

	@ApiProperty({ example: '********', description: 'user registration password' })
	readonly password: string;
}
