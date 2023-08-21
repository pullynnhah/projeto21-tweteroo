import { Injectable } from "@nestjs/common";
import { User } from "./entities/user.entity";
import { Tweet } from "./entities/tweet.entity";

@Injectable()
export class AppService {
  private users: User[];
  private tweets: Tweet[];

  constructor() {
    this.users = [new User("username", "avatar")];
    this.tweets = [new Tweet(new User("username", "avatar"), "tweet")];
  }

  getUsers(): User[] {
    return this.users;
  }

  getTweets(): Tweet[] {
    return this.tweets;
  }
}
