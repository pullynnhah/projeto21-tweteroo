import { IsNotEmpty, IsString, IsUrl } from "class-validator";
import { User } from "../entities/user.entity";

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  avatar: string;
}
