import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 *   Wsave here private parameters of the user
 */
@Entity()
export class CrudEntity {
  @ApiProperty({ example: '1234' })
  @PrimaryGeneratedColumn()
  id: number;
}
