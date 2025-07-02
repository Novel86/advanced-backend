import { ApiProperty } from '@nestjs/swagger';
import {
	AllowNull,
	AutoIncrement,
	Column,
	Comment,
	DataType,
	Default,
	Model,
	PrimaryKey,
	Table,
	Unique,
} from 'sequelize-typescript';

interface UserCreationAttrs {
	email: string;
	password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
	@ApiProperty({ example: '1', description: 'user id primaryKey' })
	@Unique
	@AutoIncrement
	@PrimaryKey
	@Column({ type: DataType.INTEGER })
	id_user: number;

	@ApiProperty({ example: 'example@ml.ru', description: 'user registration email' })
	@Unique
	@AllowNull(false)
	@Comment('user registration email')
	@Column({
		type: DataType.STRING,
	})
	email: string;

	@ApiProperty({ example: '********', description: 'user registration password' })
	@AllowNull(false)
	@Comment('user registration password')
	@Column({
		type: DataType.STRING,
	})
	password: string;

	@ApiProperty({ example: 'false', description: 'is user ban' })
	@Default(false)
	@Comment('is user banned?')
	@Column({ type: DataType.BOOLEAN })
	banned: boolean;

	@ApiProperty({ example: 'null', description: 'the reason why user is ban' })
	@Comment('why user is banned')
	@AllowNull
	@Column({ type: DataType.STRING })
	banReason: string;

	@ApiProperty({ example: 'null', description: 'who has banned the user' })
	@AllowNull
	@Comment('who has blocked user')
	@Column({ type: DataType.STRING })
	banInitiator: string;
}
