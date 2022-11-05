import { Column, Entity } from 'typeorm';
import { ROLE_ENUM } from '../enums/role.enum';
import { CrudEntity } from './crud.entity';

/**
 * We save here private parameters of the user
 */
@Entity()
export class Profile extends CrudEntity {
  /* @ApiProperty({ name: 'ROLE_ENUM', enum: ROLE_ENUM })
  @Column('enum')
  @IsArray()
  roles: ROLE_ENUM[]; */
  @Column({
    type: 'set',
    enum: ROLE_ENUM,
    default: ROLE_ENUM.READER,
  })
  role: ROLE_ENUM[];
}
