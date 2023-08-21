import { IsNotEmpty, IsString, IsUrl } from "class-validator";
import { User } from "../entities/user.entity";

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty({ message: "All fields are required!" })
  username: string;

  @IsString()
  @IsNotEmpty({ message: "All fields are required!" })
  @IsUrl()
  avatar: string;
}
