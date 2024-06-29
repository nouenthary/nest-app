import { Injectable } from '@nestjs/common';

type User = {
  id : number;
  name : string;
  salary : number;
}

@Injectable()
export class AppService {
  getHello(): Array<User> {

    let user: User[] = [];

    for (var i = 0; i < 100 ; i++) {
      user.push({
        id : i,
        name : "user" + i,
        salary : i * 1000
      });
    }

    return user;
  }
}
