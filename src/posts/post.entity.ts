import { ApiProperty } from '@nestjs/swagger';

import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class Post {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column({ length: 180, nullable: true })
  body?: string;

  @ApiProperty()
  @Column({ type: 'text', nullable: true })
  url?: string;

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty()
  @Exclude()
  @UpdateDateColumn()
  updatedAt: Date;
}
