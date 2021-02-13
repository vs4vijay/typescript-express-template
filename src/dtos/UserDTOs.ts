import { IsBoolean, IsEmail, IsOptional, IsString } from 'class-validator';
import { User } from '../models';

export class UserDTO {
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsBoolean()
  @IsOptional()
  isActive: boolean;

  toModel(): User {
    const user = new User();
    user.name = this.name;
    user.email = this.email;
    user.isActive = !!this.isActive;
    return user;
  }

  static fromModel(user: User): ResponseUserDTO {
    const userDTO = new ResponseUserDTO();
    userDTO.id = user.id;
    userDTO.name = user.name;
    userDTO.email = user.email;
    userDTO.isActive = user.isActive;
    userDTO.createdAt = user.createdAt;
    userDTO.updatedAt = user.updatedAt;
    userDTO.createdBy = user.createdBy;
    userDTO.updatedBy = user.updatedBy;
    return userDTO;
  }
}

export class ResponseUserDTO extends UserDTO {
  id: string;

  createdAt: Date;

  updatedAt: Date;

  createdBy: string;

  updatedBy: string;
}

export class CreateUserDTO extends UserDTO {}

export class UpdateUserDTO extends UserDTO {}
