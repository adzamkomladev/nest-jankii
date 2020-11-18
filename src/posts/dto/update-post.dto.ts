import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UpdatePostDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(180)
  readonly body: string;
}
