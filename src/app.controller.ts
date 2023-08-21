import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post
} from "@nestjs/common";
import { AppService } from "./app.service";
import { Tweet } from "./entities/tweet.entity";
import { User } from "./entities/user.entity";
import { CreateUserDTO } from "./dtos/user.dto";
import { CreateTweetDTO } from "./dtos/tweet.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/")
  getHealth() {
    return this.appService.getHealth();
  }

  @Post("/sign-up")
  @HttpCode(200)
  createUser(@Body() body: CreateUserDTO) {
    try {
      this.appService.createUser(body);
      return "OK";
    } catch (e) {
      throw new HttpException(
        "All fields are required!",
        HttpStatus.BAD_REQUEST
      );
    }
  }

  @Post("/tweet")
  createTweet(@Body() body: CreateTweetDTO) {
    return this.appService.createTweet(body);
  }

  @Get("/users")
  getUsers(): User[] {
    return this.appService.getUsers();
  }
  @Get("/tweets")
  getTweets() {
    return this.appService.getTweets();
  }

  @Get("/tweets/:username")
  getTweetsByUsername(@Param("username") username: string) {
    return this.appService.getTweetsByUsername(username);
  }
}
