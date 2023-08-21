import { User } from "./user.entity";

export class Tweet {
  private user: User;
  private tweet: string;

  constructor(user: User, tweet: string) {
    this.tweet = tweet;
    this.user = user;
  }

  isTweetFromUsername(username: string) {
    return this.user.getUsername() === username;
  }
}
