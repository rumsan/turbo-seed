import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateBeneficiaryDto {
  @IsString()
  @ApiProperty({
    description: 'name',
    example: 'Hello',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'phone',
    example: '9898989898',
  })
  phone: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'address',
    example: '123 Main St',
  })
  address?: string;
}
