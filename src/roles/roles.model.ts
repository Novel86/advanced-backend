import { ApiProperty } from '@nestjs/swagger';
import {
	AllowNull,
	AutoIncrement,
	BelongsToMany,
	Column,
	Comment,
	DataType,
	Model,
	PrimaryKey,
	Table,
	Unique,
} from 'sequelize-typescript';
import { User } from 'src/users/users.model';
import { UserRole } from './user-role.model';

interface RoleCreationAttrs {
	value: string;
	description: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreationAttrs> {
	@ApiProperty({ example: '1', description: 'role id primaryKey' })
	@Unique
	@AutoIncrement
	@PrimaryKey
	@Column({ type: DataType.INTEGER })
	id_Role: number;

	@ApiProperty({ example: 'administrator', description: 'app users role' })
	@Unique
	@AllowNull(false)
	@Comment('app users role')
	@Column({
		type: DataType.STRING,
	})
	value: string;

	@ApiProperty({ example: 'some text here', description: 'some text description here' })
	@Comment('some text description')
	@Column({
		type: DataType.STRING,
	})
	description: string;

	@BelongsToMany(() => User, () => UserRole)
	users: User[];
}
