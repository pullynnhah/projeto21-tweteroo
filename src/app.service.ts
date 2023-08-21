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
    const tweets = [];
    for (const tweet of this.tweets) {
      if (tweet.isTweetFromUsername(username)) tweets.push(tweet);
    }
    return tweets;
  }

  createUser(body: CreateUserDTO) {
    this.users.push(new User(body.username, body.avatar));
  }

  createTweet(body: CreateTweetDTO) {
    let tweet = null;
    for (const user of this.users) {
      if (user.getUsername() === body.username) {
        tweet = new Tweet(user, body.tweet);
      }
    }
    if (tweet === null) throw Error("UNAUTHORIZED");
  }
}
