import { ApiProperty } from '@nestjs/swagger';
import {
	AllowNull,
	AutoIncrement,
	BelongsToMany,
	Column,
	Comment,
	DataType,
	ForeignKey,
	Model,
	PrimaryKey,
	Table,
	Unique,
} from 'sequelize-typescript';
import { User } from 'src/users/users.model';
import { Role } from './roles.model';

@Table({ tableName: 'user_role', createdAt: false, updatedAt: false })
export class UserRole extends Model<UserRole> {
	@Unique
	@AutoIncrement
	@PrimaryKey
	@Column({ type: DataType.INTEGER })
	id_user_role: number;

	@ForeignKey(() => User)
	@AllowNull(false)
	@Comment('user id (foreign key)')
	@Column({
		type: DataType.INTEGER,
	})
	id_user: number;

	@ForeignKey(() => Role)
	@AllowNull(false)
	@Comment('role id (foreign key)')
	@Column({
		type: DataType.INTEGER,
	})
	id_role: number;
}
