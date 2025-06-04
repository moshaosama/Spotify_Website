import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/auth.entity';
import { Repository } from 'typeorm';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async CreateUser(newuser: CreateAuthDto) {
    if (
      !newuser ||
      !newuser.firstName ||
      !newuser.lastName ||
      !newuser.email ||
      !newuser.picture
    ) {
      throw new BadRequestException('All fields are required');
    }

    const newUser = await this.usersRepository.create(newuser);
    await this.usersRepository.save(newUser);
  }

  async GetUserByEmail(Email: string) {
    if (!Email) {
      throw new BadRequestException('Email is required');
    }
    const userByEmail = await this.usersRepository.findOne({
      where: { email: Email },
    });

    return userByEmail;
  }

  async Login(user: LoginAuthDto) {
    if (!user || !user.email) {
      throw new BadRequestException('data is requireds');
    }

    const existingUser = await this.usersRepository.findOne({
      where: { email: user.email },
    });

    if (!existingUser) {
      throw new NotFoundException('No account found with this email');
    }

    const Token = this.jwtService.sign({
      email: user.email,
      sub: existingUser.id,
    });

    return {
      user: existingUser,
      access_token: Token,
    };
  }
}
