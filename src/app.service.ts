import { Injectable } from "@nestjs/common";
import { User } from "./entities/user.entity";
import { Tweet } from "./entities/tweet.entity";

@Injectable()
export class AppService {
  private usersDB: User[];
  private tweetsDB: Tweet[];

  constructor() {
    this.usersDB = [];
    this.tweetsDB = [];
  }

  getHello(): string {
    return "Hello World!";
  }
}
