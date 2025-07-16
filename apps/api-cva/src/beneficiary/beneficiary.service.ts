import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma';
import { CreateBeneficiaryDto } from './dto/create-beneficiary.dto';
import { UpdateBeneficiaryDto } from './dto/update-beneficiary.dto';

@Injectable()
export class BeneficiaryService {
  constructor(private prisma: PrismaService) {}

  async create(createBeneficiaryDto: CreateBeneficiaryDto) {
    console.log('createBeneficiaryDto', createBeneficiaryDto);
    return await this.prisma.beneficiary.create({
      data: createBeneficiaryDto,
    });
  }

  findAll() {
    return `This action returns all beneficiary`;
  }

  findOne(id: number) {
    return `This action returns a #${id} beneficiary`;
  }

  update(id: number, updateBeneficiaryDto: UpdateBeneficiaryDto) {
    return `This action updates a #${id} beneficiary`;
  }

  remove(id: number) {
    return `This action removes a #${id} beneficiary`;
  }
}
