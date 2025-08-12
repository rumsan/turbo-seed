import { Injectable } from '@nestjs/common';
import { db } from '@repo/database';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor() { }
  async create(createUserDto: CreateUserDto) {
    // return this.prisma.client.user.create({
    //   data: createUserDto,
    // });
    return db.user.create({
      data: createUserDto,
    });
  }

  findAll() {
    return db.user.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
