import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User, UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<Omit<User, 'password' & 'username'>> {
    const user = this.usersService.findOnebyusername(username);
    if (user && user.password === password) {
      delete user.password;
      delete user.username;
      return user;
    }
    return null;
  }

  async login(user: Omit<User, 'password' & 'username'>) {
    const payload = { username: user.name, sub: user.id };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
