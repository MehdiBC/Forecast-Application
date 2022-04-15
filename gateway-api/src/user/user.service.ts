import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const userInDb = await this.userRepository.findOne({
      email: createUserDto.email,
    });
    if (userInDb) {
      throw new ConflictException(
        `user with email: ${userInDb.email} already exists.`,
      );
    }
    const newUser = this.userRepository.create(createUserDto);
    return await this.userRepository.save(newUser);
  }

  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOne({ id });
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({ email });
  }
}
