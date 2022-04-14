import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../enumerations/role.enum';
import { Exclude } from 'class-transformer';
import * as bcrypt from 'bcrypt';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    nullable: false,
    unique: true,
  })
  email: string;
  @Column({ nullable: false })
  @Exclude()
  password: string;
  @Column({
    enum: Role,
    default: Role.USER,
    nullable: false,
  })
  role: Role;

  @BeforeInsert()
  private async hashPassword(): Promise<void> {
    const salt = await bcrypt.genSalt(10);
    if (this.password) this.password = await bcrypt.hash(this.password, salt);
  }
}
