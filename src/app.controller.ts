import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { Tweet } from "./entities/tweet.entity";
import { User } from "./entities/user.entity";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/users")
  getUsers(): User[] {
    return this.appService.getUsers();
  }
  @Get("/tweets")
  getTweets(): Tweet[] {
    return this.appService.getTweets();
  }
}
