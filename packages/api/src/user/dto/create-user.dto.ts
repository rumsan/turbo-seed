import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'name',
    example: 'XYZ',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'description',
    example: '9898989898',
  })
  phone: string;
}
