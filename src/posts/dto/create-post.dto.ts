import { ApiProperty } from '@nestjs/swagger';

import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({
    description: 'The body of the post',
    maximum: 180,
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(180)
  readonly body: string;
}
