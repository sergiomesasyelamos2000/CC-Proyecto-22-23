import { ApiProperty } from '@nestjs/swagger';
import * as bcrypt from 'bcrypt';
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { crypt } from '../utils/encryptation';
import { CrudEntity } from './crud.entity';


export interface User {
  email: string;
  name: string;
  password: string;
  surname: string;
}

@Entity()
export class UserEntity extends CrudEntity implements User {

  @ApiProperty({ example: 'Sergio' })
  @Column('varchar')
  name: string;

  @ApiProperty({ example: 'root@root.com' })
  @Column('varchar')
  email: string;

  @ApiProperty({ example: 'root' })
  @Column('varchar')
  password: string;

  @ApiProperty({ example: 'Mesas' })
  @Column('varchar')
  surname: string;

  @BeforeInsert()
  async hashPassword() {
    await crypt(this.password).then((password) => (this.password = password));
  }

  async validatePassword(password: string): Promise<boolean> {
    return await bcrypt.compareSync(password, this.password);
  }
}