import { ApiProperty } from '@nestjs/swagger';

import { IsOptional, IsString, MaxLength, ValidateIf } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({
    description: 'The body of the post',
    maximum: 180,
    type: String,
  })
  @ValidateIf((o) => !o.url)
  @IsString()
  @MaxLength(180)
  readonly body?: string;

  @ApiProperty({
    description: 'The url of the post resource (image/video/gif/audio)',
    type: String,
  })
  @IsOptional()
  @IsString()
  readonly url?: string;
}
