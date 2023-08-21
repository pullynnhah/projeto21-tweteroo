import { HttpException, Injectable } from "@nestjs/common";
import { User } from "./entities/user.entity";
import { Tweet } from "./entities/tweet.entity";
import { CreateUserDTO } from "./dtos/user.dto";
import { CreateTweetDTO } from "./dtos/tweet.dto";

@Injectable()
export class AppService {
  private users: User[];
  private tweets: Tweet[];

  constructor() {
    this.users = [];
    this.tweets = [];
  }

  getHealth(): string {
    return "I'm okay!";
  }

  getUsers(): User[] {
    return this.users;
  }

  getTweets() {
    return this.tweets;
  }

  getTweetsByUsername(username: string) {
    return this.tweets;
  }

  createUser(body: CreateUserDTO) {
    this.users.push(new User(body.username, body.avatar));
  }

  createTweet(body: CreateTweetDTO) {
    this.tweets.push(new Tweet(new User("username", "avatar"), "tweet"));
  }
}
