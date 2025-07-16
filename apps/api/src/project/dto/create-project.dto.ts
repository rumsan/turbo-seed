import { ApiProperty } from '@nestjs/swagger';
import { ProjectStatus } from '@rahat/prisma/client';
import { IsString } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  @ApiProperty({
    description: 'name',
    example: 'Hello',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'description',
    example: 'Hello',
  })
  description: string;

  @IsString()
  @ApiProperty({
    description: 'name',
    example: 'Hello',
  })
  status: ProjectStatus;
}
