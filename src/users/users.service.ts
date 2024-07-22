import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      username: 'john.doe@example.com',
      password: 'password',
    },
    {
      id: 2,
      name: 'Jane Doe',
      username: 'jane.doe@example.com',
      password: 'password',
    },
    {
      id: 1,
      username: 'm@m.com',
      name: 'mostafa',
      password: '123456',
    },
  ];

  findAll(): User[] {
    return this.users;
  }

  findOnebyId(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  findOnebyusername(username: string): User {
    return this.users.find((user) => user.username === username);
  }

  create(user: User): User {
    this.users.push(user);
    return user;
  }

  update(id: number, user: User): User {
    const index = this.users.findIndex((user) => user.id === id);
    this.users[index] = user;
    return user;
  }
}
