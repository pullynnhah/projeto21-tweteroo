import { IsNotEmpty, IsString } from "class-validator";

export class CreateTweetDTO {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  tweet: string;
}
